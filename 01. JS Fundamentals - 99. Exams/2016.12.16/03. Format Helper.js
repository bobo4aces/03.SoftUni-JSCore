function formatHelper ([text]) {
    text=text
        .replace(/[ ]*([.,!?:;])[ ]*/g, (match, g1) => `${g1} `)
        .replace(/\. (?=[0-9])/g, (match) => `.`)
        .replace(/" *(.+?) *"/g, (match, g1)=>`"${g1}"`)
        .replace(/([.,!?:;]) (?=[.,!?:;])/g, (match,g1)=>`${g1}`);
    console.log(text);
}
formatHelper(['Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .']);
formatHelper(['Make,sure to give:proper spacing where is needed... !']);