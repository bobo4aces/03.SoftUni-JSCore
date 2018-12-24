function figureArea(w, h, W, H) {
    let area = Number(W) * Number(H) + Number(w) * Number(h) - Math.min(Number(w),Number(W)) * Math.min(Number(h),Number(H));
    console.log(area);
}
figureArea(2, 4, 5, 3);
figureArea(13, 2, 5, 8);