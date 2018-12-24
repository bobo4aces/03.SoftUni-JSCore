function examResults(array) {
    let mainCourse = array[array.length-1].trim();
    let points = 0;
    let studentCount = 0;
    let output="";
    for (let i = 0; i < array.length-1; i++) {
        let [student, course, examPoints, courseBonuses] = array[i].split(" ").filter(w => w !== "");
        if (course === mainCourse) {
            points += Number(examPoints);
            studentCount++;
        }
        if (examPoints < 100) {
            output+=`${student} failed at "${course}"\n`;
            continue;
        }
        let coursePoints = Number(examPoints) * 0.20;
        let totalPoints = coursePoints + Number(courseBonuses);
        let grade = ((totalPoints / 80) * 4) + 2;
        if (grade > 6.00) {
            grade = 6.00;
        }

        output+=`${student}: Exam - "${course}"; Points - ${Math.round(totalPoints * 100) / 100}; Grade - ${grade.toFixed(2)}\n`;
    }
    output+=`"${mainCourse}" average points -> ${(Math.round(points/studentCount*100)/100)}\n`;
    console.log(output);
}
examResults([
    "Pesho C#-Advanced 100 3",
    "Gosho Java-Basics 157 3",
    "Tosho HTML&CSS 317 12",
    "Minka C#-Advanced 57 15",
    "Stanka C#-Advanced 157 15",
    "Kircho C#-Advanced 300 0",
    "Niki C#-Advanced 400 10",
    "C#-Advanced"
]);