function hungryProgrammer(meals,commands) {
    let mealsEaten = 0;
    for (let i=0; i<commands.length; i++) {
        let currentCommand = commands[i].split(" ");
        if (currentCommand.length===1) {
            if (currentCommand[0]==="Serve") {
                if (meals.length>=1) {
                    console.log(`${meals.pop()} served!`);
                }
            } else if (currentCommand[0]==="Eat") {
                if (meals.length>=1) {
                    mealsEaten++;
                    console.log(`${meals.shift()} eaten`);
                }
            } else if (currentCommand[0]==="End") {
                if (meals.length>=1) {
                    console.log(`Meals left: ${meals.join(", ")}`);
                } else {
                    console.log("The food is gone");
                }
                console.log(`Meals eaten: ${mealsEaten}`);
                return;
            }
        } else if (currentCommand.length===2) {
            if (currentCommand[0]==="Add") {
                if (currentCommand[1]!=="") {
                    meals.unshift(currentCommand[1]);
                }
            }
        } else if (currentCommand.length===3) {
            let firstIndex = Number(currentCommand[1]);
            let secondIndex = Number(currentCommand[2]);
            if (firstIndex>=0&&firstIndex<meals.length&&secondIndex>=0&&secondIndex<meals.length) {
                if (currentCommand[0] === "Shift") {
                    if (meals[firstIndex]!==undefined||meals[secondIndex]!==undefined) {
                        let oldMeal = meals[firstIndex];
                        meals[firstIndex] = meals[secondIndex];
                        meals[secondIndex] = oldMeal;
                    }
                } else if (currentCommand[0] === "Consume") {
                    if (secondIndex-firstIndex+1>=1) {
                        mealsEaten += meals.splice(firstIndex, secondIndex - firstIndex + 1).length;
                        console.log("Burp!");
                    }
                }
            }
        }
    }
}
hungryProgrammer(['chicken', 'steak', 'eggs'],
    ['Serve',
        'Eat',
        'End',
        'Consume 0 1']
);
hungryProgrammer(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti',
        'Shift 0 1',
        'Consume 1 4',
        'End']
);
hungryProgrammer(['carrots', 'apple', 'beet'],
    ['Consume 0 2',
        'End',]
);
hungryProgrammer(['soup', 'spaghetti', 'eggs'],
['Consume 0 2',
'Eat',
'Eat',
'Shift 0 1',
'End',
'Eat']);
hungryProgrammer(['bacon', 'veggies', 'chicken', 'turkey', 'eggs'],
['Shift 2 9',
'Eat',
'Serve',
'End',
'Serve']);