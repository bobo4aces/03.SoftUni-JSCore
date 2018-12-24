function travelPlans (arr) {
    let total=0;
    let specializedCounter=1;
    let clumsyCounter=1;
    for (let input of arr) {
        let [profession, amount] = input.split(":").map(e=>e.trim()).filter(w=>w!=="");
        amount = Number(amount);
        switch (profession) {
            case "Programming":
            case "Hardware maintenance":
            case "Cooking":
            case "Translating":
            case "Designing":
                if (amount<200) {
                    continue;
                }
                total+=amount;
                total-=(amount*0.20); //?
                if (specializedCounter%2===0) {
                    total+=200;
                }
                specializedCounter++;
                break;
            case "Singing":
            case "Accounting":
            case "Teaching":
            case "Exam-Making":
            case "Acting":
            case "Writing":
            case "Lecturing":
            case "Modeling":
            case "Nursing":
                if (clumsyCounter%2===0) {
                    total+=amount-(amount*0.05);
                } else if (clumsyCounter%3===0) {
                    total+=amount-(amount*0.1);
                } else {
                    total+=amount;
                }
                clumsyCounter++;
                break;
            case "Driving":
            case "Managing":
            case "Fishing":
            case "Gardening":
                total+=amount;
                break;
        }
    }
    if (total<1000) {
        console.log(`Final sum: ${total.toFixed(2)}`);
        console.log(`Mariyka need to earn ${(1000-total).toFixed(2)} gold more to continue in the next task.`);
    } else {
        console.log(`Final sum: ${total.toFixed(2)}`);
        console.log(`Mariyka earned ${(total-1000).toFixed(2)} gold more.`);
    }
}
travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);