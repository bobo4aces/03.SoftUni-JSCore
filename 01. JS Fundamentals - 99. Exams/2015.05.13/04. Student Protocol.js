function studentProtocol (input) {
    let exams = {};
    for (let line of input) {
        let [name, examAndPoints] = line.split("-").map(e => e.trim()).filter(w => w !== "");
        let [exam, points] = examAndPoints.split(":").map(e => e.trim()).filter(w => w !== "");
        points = Number(points);
        if (points < 0 || points > 400) {
            continue;
        }
        if (!exams.hasOwnProperty(exam)) {
            exams[exam]=[];
        }
        let isFound=false;
        for (let obj of exams[exam]) {
            if (obj.name === name){
                isFound=true;
                if (obj.result<points) {
                    obj.result=points;
                }
                obj.makeUpExams=obj.makeUpExams+1;
                break;
            }
        }
        if (!isFound) {
            exams[exam].push({name:name,result:points,makeUpExams:0});
        }
    }
    let k = Object.keys(exams);
    let sort = Object.keys(exams).forEach(key=>Object.values(exams[key]).forEach(value=>value.sort((a,b)=>{

    }))
    //for (let key of Object.keys(exams)) {
    //    for (let value of Object.values(exams)) {
    //        for (let v of Object.values(value)) {
    //            console.log(v.result);
    //        }
    //    }
    //}
}
studentProtocol([
"Peter Jackson - Java : 350",
"Jane - JavaScript : 200",
"Jane     -    JavaScript :     400",
"Simon Cowell - PHP : 100",
"Simon Cowell-PHP: 500",
"Simon Cowell - PHP : 200"
]);
studentProtocol([
"Simon Cowell - PHP : 100",
"Simon Cowell-PHP: 500",
"Peter Jackson - PHP: 350",
"Simon Cowell - PHP : 400"
]);