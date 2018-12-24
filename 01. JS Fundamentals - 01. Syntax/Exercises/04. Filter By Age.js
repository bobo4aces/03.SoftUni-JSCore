function filterByAge (minimumAge, firstPersonName, firstPersonAge, secondPersonName, secondPersonAge) {
    let firstPerson = {'name': firstPersonName, 'age': firstPersonAge};
    let secondPerson = {'name': secondPersonName, 'age': secondPersonAge};
    if (firstPerson.age>=minimumAge) {
        console.log(firstPerson);
    }
    if (secondPerson.age>=minimumAge) {
        console.log(secondPerson);
    }
}
filterByAge(12, 'Ivan', 15, 'Asen', 9);