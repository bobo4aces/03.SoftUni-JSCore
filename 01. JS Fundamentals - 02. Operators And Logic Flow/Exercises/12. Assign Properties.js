function assignProperties (array) {
    let object = {[array[0]]:array[1],[array[2]]:array[3],[array[4]]:array[5]};
    console.log(object);
}
assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);