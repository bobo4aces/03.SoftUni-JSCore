function constructionCrew (obj) {
    if (obj.handsShaking) {
        obj.bloodAlcoholLevel+=obj.weight*obj.experience*0.1;
        obj.handsShaking=false;
    }
    return obj;
}
constructionCrew({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
);
constructionCrew({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }
);
constructionCrew({ weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false }
);