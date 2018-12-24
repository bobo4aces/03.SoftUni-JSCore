let listing = (() => {
    function listAllCars() {
        const endpoint = `cars?query={}&sort={"_kmd.ect": -1}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createCarListing(brand, description, fuel, imageUrl, isAuthor, model, price, seller, title, year) {
        const data = {brand, description, fuel, imageUrl, isAuthor, model, price, seller, title, year};
        return remote.post('appdata', 'cars', 'kinvey', data);
    }
    
    function editCarListing(carId, brand, description, fuel, imageUrl, isAuthor, model, price, seller, title, year ) {
        const endpoint = `cars/${carId}`;
        const data = {brand, description, fuel, imageUrl, isAuthor, model, price, seller, title, year};
        return remote.update('appdata', endpoint, 'kinvey', data);
    }
    
    function deleteCarListing(carId) {
        const endpoint = `cars/${carId}`;
        return remote.remove('appdata', endpoint, 'kinvey');
    }
    
    function getMyCarListings(username) {
        const endpoint = `cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }

    function getListingById(id) {
        const endpoint = `cars/${id}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    return {
        listAllCars,
        createCarListing,
        editCarListing,
        deleteCarListing,
        getMyCarListings,
        getListingById
    }
})();