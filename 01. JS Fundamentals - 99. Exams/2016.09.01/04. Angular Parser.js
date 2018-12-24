function angularParser (array) {
    let applications = new Map();
    let existingApplications = [];
    for (let i = 0; i < array.length; i++) {
        let info = array[i].split("'");
        let application;
        let controller;
        let model;
        let view;
        if (info[0]==="$app=") {
            application=info[1];
            existingApplications.push(application);
        }
        if (info.length>=3) {
            if (info[2]==="&app=") {
                application=info[3];

            }
        }
        if (!applications.has(application)) {
            applications.set(application,{controllers:[], models: [], views: []});
        }
        if (info[0]==="$controller=") {
            controller=info[1];
            applications.get(application).controllers.push(controller);
        }
        if (info[0]==="$model=") {
            model=info[1];
            applications.get(application).models.push(model);
        }
        if (info[0]==="$view=") {
            view=info[1];
            applications.get(application).views.push(view);
        }

    }
    let result=[];
    for (let keys of applications.keys()) {
        for (let values of applications.values()) {
            if (keys===undefined||values===undefined) {
                continue;
            }
            result.push(`${keys}":`+JSON.stringify(values));
        }
    }
}
angularParser([
    "$app='MyApp'",
    "$controller='My Controller'&app='MyApp'",
    "$model='My Model'&app='MyApp'",
    "$view='My View'&app='MyApp'"
]);
angularParser([
    "$controller='PHPController'&app='Language Parser'",
    "$controller='JavaController'&app='Language Parser'",
    "$controller='C#Controller'&app='Language Parser'",
    "$controller='C++Controller'&app='Language Parser'",
    "$app='Garbage Collector'",
    "$controller='GarbageController'&app='Garbage Collector'",
    "$controller='SpamController'&app='Garbage Collector'",
    "$app='Language Parser'"
]);