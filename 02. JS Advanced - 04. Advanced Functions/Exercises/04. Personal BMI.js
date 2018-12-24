function personalBmi(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round((Number(weight) / Math.pow(Number(height) / 100, 2))),
        status: ""
        };
        if (person.BMI < 18.5) {
            person.status= "underweight";
        } else if (person.BMI < 25) {
            person.status= "normal";
        } else if (person.BMI < 30) {
            person.status= "overweight";
        } else {
            person.status= "obese";
            person.recommendation="admission required";
        }
    return person;
}
personalBmi("Peter", 29, 75, 182);
personalBmi("Honey Boo Boo", 9, 57, 137);