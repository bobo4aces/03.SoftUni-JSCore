function orderRectangles (matrix) {
    function createRectangle(width,height) {
        let rectangle = {
            width: width,
            height: height,
            area: function () {
                return this.width*this.height;
            },
            compareTo: function (other) {
                let diff = other.area()-this.area();
                if (diff===0) {
                    return other.width-this.width;
                }
                return diff;
            }
        };
        return rectangle;
    }
    let rectangles = [];
    for (let [width, height] of matrix) {
        let rectangle = createRectangle(width,height);
        rectangles.push(rectangle);
    }
    rectangles.sort((a,b)=>a.compareTo(b));
    return rectangles;
}
console.log(orderRectangles([[10,5],[5,12]]));
console.log(orderRectangles([[10,5], [3,20], [5,12]]));