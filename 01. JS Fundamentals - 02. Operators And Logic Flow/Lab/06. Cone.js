function calculateConesVolumeAndSurfaceArea(radius, height) {
    let volume = (1/3)*Math.PI*radius*radius*height;
    let area = Math.PI*radius*(radius+Math.sqrt(radius*radius+height*height));
    console.log("volume = " + volume);
    console.log("area = " + area);
}
calculateConesVolumeAndSurfaceArea(3,5);
calculateConesVolumeAndSurfaceArea(3.3,7.8);