const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_HkFgEuhVm';
const APP_SECRET = 'ee6746dd6462469a8738691c8f3f04f5';
const AUTH_HEADERS = {Authorization:'Basic ' + btoa(APP_KEY + ":" + APP_SECRET)};

function startApp() {
    //show the menu items at start
    viewProssesor.changeVisibility('#menu',true,true);
    viewProssesor.updateNavigationMenu();

    //show the home view
    viewProssesor.changeView('#viewHome');

    //attach the events
    eventProcessor.attachEvents();
}

function saveUserDataInSeasson(userInfo,username){
    sessionStorage.setItem('userToken',userInfo._kmd.authtoken);
    sessionStorage.setItem('userName',username);
    viewProssesor.updateNavigationMenu();
}

function clearTable(){
    //removes all of the previous table rows
    $('#ads table tbody tr').toArray().map((e,i) => {if(i > 0)$(e).remove()});
}

function listAds(){
    //get all ads
    $.ajax({
        method:"GET",
        url:BASE_URL + 'appdata/' + APP_KEY + "/ads",
        headers:{Authorization: "Kinvey " + sessionStorage.getItem('userToken')},
    }).then(ads => {
        let table = $('#ads table tbody');
        clearTable();
        for(let ad of ads){
            let current = $('<tr>')
            .append($('<td>').text(ad.title))
            .append($('<td>').text(ad.publisher))
            .append($('<td>').text(ad.description))
            .append($('<td>').text(ad.price))
            .append($('<td>').text(ad.publishedDate));
            if(ad.publisher == sessionStorage.getItem('userName')){
                current.append($('<td>')
                    .append($('<a href="#">').text('[Delete]').on('click',function(){
                        //delete the selected ad
                        $.ajax({
                            method:"DELETE",
                            url:BASE_URL + "appdata/" + APP_KEY + "/ads/" + ad._id,
                            headers:{Authorization: "Kinvey " + sessionStorage.getItem('userToken')}
                        });
                        $(this).parent().parent().remove();
                    }))
                    .append($('<a href="#">').text('[Edit]').on('click',function(){
                        viewProssesor.changeView('#viewEditAd');
                        let editForm = $('#formEditAd');
                        let title = editForm.find('input[name="title"]').val(ad.title);
                        let description = editForm.find('textarea[name="description"]').val(ad.description);
                        let price = editForm.find('input[name="price"]').val(ad.price);
                        editForm.find('input[name="datePublished"]')
                        .attr('type','text')
                        .attr('value',"value can't be set")
                        .prop('readonly',true);
                        
                        editForm.find('#buttonEditAd').on('click',function(){
                            $.ajax({
                                method:"PUT",
                                url:BASE_URL + "appdata/" + APP_KEY + '/ads/' + ad._id,
                                headers:{Authorization: "Kinvey " + sessionStorage.getItem('userToken')},
                                data:{
                                    title:$(title).val(),
                                    description:$(description).val(),
                                    price:$(price).val(),
                                    publisher:ad.publisher,
                                    publishedDate:ad.publishedDate
                                    }
                            }).then((res) => {
                                viewProssesor.changeView('#viewAds');
                                listAds();
                            }).catch(handleError);
                        }) 
                    }))   
                );
            }
            table.append(current);
        }
    }).catch(handleError);
}

let viewProssesor = {
    changeVisibility:function(selector,operation,childrenVisibility){
        if(operation === true){
            $(selector).show();
        }
        else if(operation === false){
            $(selector).hide();
        }
        if(childrenVisibility === true)$(selector).find('*').show();
        else if(childrenVisibility === false)$(selector).find('*').hide();
    },
    updateNavigationMenu:function(){
        this.changeVisibility('#linkHome',true);
        if(sessionStorage.getItem('userToken') === null){ //user is not logged in
            //show only the nessesary ones
            this.changeVisibility('#linkRegister',true);
            this.changeVisibility('#linkLogin',true);
            //and hide the user options
            this.changeVisibility('#linkListAds',false);
            this.changeVisibility('#linkCreateAd',false);
            this.changeVisibility('#linkLogout',false);
        }
        else{ //user is logged in
            //hide all of the guest ones
            this.changeVisibility('#linkRegister',false);
            this.changeVisibility('#linkLogin',false);
            //and show the user options
            this.changeVisibility('#linkListAds',true);
            this.changeVisibility('#linkCreateAd',true);
            this.changeVisibility('#linkLogout',true);
        }
    },
    changeView(viewSelector){
        //hides all views and resets the form
        $("section[id^='view']").each((_, el) => 
        {$(el).find('form').trigger('reset');$(el).hide()});
        
        //and shows only this one
        this.changeVisibility(viewSelector,true,true);
    }
}

let eventProcessor = {
    defEvent:"click",
    attachEvent:function(selector,func,event){
        if(event)
        $(selector).on(event,func);
        else $(selector).on(this.defEvent,func);
    },
    addFunctionalityForForm:function(formSelector,submitSelector,func){
        $(formSelector).find(submitSelector).on('click',() => {func.call($(formSelector))});
    },
    attachEvents:function(){
        //claer the table from the default example
        clearTable();

        //add the functionality for all of the menu items
        this.attachEvent('#linkHome',() => {viewProssesor.changeView('#viewHome')});
        this.attachEvent('#linkLogin',() => {viewProssesor.changeView('#viewLogin')});
        this.attachEvent('#linkRegister',() => {viewProssesor.changeView('#viewRegister')});
        this.attachEvent('#linkListAds',() => {viewProssesor.changeView('#viewAds');listAds()});
        this.attachEvent('#linkCreateAd',() => {viewProssesor.changeView('#viewCreateAd')});
        this.attachEvent('#linkLogout', () => {
            $.ajax({
                method:"POST",
                url:BASE_URL + 'user/' + APP_KEY + "/_logout",
                headers:{Authorization: "Kinvey " + sessionStorage.getItem('userToken')}
            }).then(() => {
                sessionStorage.removeItem('userToken');
                sessionStorage.removeItem('userName');
                viewProssesor.changeView('#viewHome');
                viewProssesor.updateNavigationMenu();
            }).catch(handleError);
        });

        //add the functionality for the login form
        this.addFunctionalityForForm('#viewLogin form','#buttonLoginUser',function(){
            //get the user data
            let username = $(this).find('input[name="username"]').val();
            let password = $(this).find('input[name="passwd"]').val();
            
            if(username.trim() != "" && password.trim() != ""){
                //and login with it
                $.ajax({
                    method:"POST",
                    url:BASE_URL + 'user/' + APP_KEY + "/login",
                    headers:AUTH_HEADERS,
                    data:{username,password}
                })
                .then((res) => {
                    saveUserDataInSeasson(res,username);
                    clearTable();
                    viewProssesor.changeView('#viewHome');
                })
                .catch(handleError);   
            }
            else{
                handleError('You need to fill all input fields');
            }
        });
        //add the functionality for the register form
        this.addFunctionalityForForm('#viewRegister form','#buttonRegisterUser',function(){
            //get the user data
            let username = $(this).find('input[name="username"]').val();
            let password = $(this).find('input[name="passwd"]').val();

            if(username.trim() != "" && password.trim() != ""){
                //and register it
                $.ajax({
                    method:"POST",
                    url:BASE_URL + 'user/' + APP_KEY + "/",
                    headers:AUTH_HEADERS,
                    data:{username,password}
                })
                .then((res) => {
                    saveUserDataInSeasson(res,username);
                    clearTable();
                    viewProssesor.changeView('#viewHome');
                })
                .catch(handleError);
            }
            else{
                handleError('You need to fill all input fields');
            }
        });

        //change the style of the advertisment form for selecting the date
        $('#viewCreateAd input[name="datePublished"]')
        .attr('type','text')
        .attr('value','value is set automatically')
        .prop('readonly',true);

        //add the functionality for creating an advertisement
        this.addFunctionalityForForm('#viewCreateAd','#buttonCreateAd',function(){
            let title = $(this).find('input[name="title"]').val();
            let description = $(this).find('textarea[name="description"]').val();
            let publishedDate = `${new Date().getMonth()}/${new Date().getDay()}/${new Date().getFullYear()}`;
            let price = $(this).find('input[name="price"]').val();

            if([title,description,publishedDate,price].map(x => "" + x).filter(x => x.trim() == "").length == 0){
                $.ajax({
                    method:"POST",
                    url:BASE_URL + 'appdata/' + APP_KEY + "/ads",
                    headers:{Authorization: "Kinvey " + sessionStorage.getItem('userToken')},
                    data:{title,description,publishedDate,price,publisher:sessionStorage.getItem('userName')}
                }).then(() => {viewProssesor.changeView('#viewCreateAd')})
                .catch(handleError);
            }else{
                handleError('You need to fill all input fields');
            }
        });
    }
}

function handleError(error){
    let stringError = typeof error == 'string' ? error : error.status + " " + error.statusText;
    $('#menu div').addClass('errorBox')
    .css('background-color','rgb(255, 51, 51)')
    .css('text-color','white')
    .append($('<span>').text(stringError).css('color','white'))
    .css('border-radius','25px')
    .show();
    setTimeout(function(){
        $('#menu div').children().remove().hide();
    }, 3000);
}