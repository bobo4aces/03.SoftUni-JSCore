function formatTemplate (array) {
    let template = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<quiz>";
    for (let i=0; i<array.length; i+=2) {
        template+=`\n\t<question>\n\t\t${array[i]}\n\t</question>`;
        template+=`\n\t<answer>\n\t\t${array[i+1]}\n\t</answer>`;
    }
    template+="\n</quiz>";
    console.log(template);
}
formatTemplate(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);
formatTemplate(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);