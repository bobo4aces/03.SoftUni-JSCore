(function () {
    return {
        add: function ([a,b],[c,d]){return [a+c,b+d]},
        multiply: function ([a,b],c){return[a*c, b*c]},
        length: function ([a,b]) {return Math.sqrt(a*a+b*b)},
        dot: function ([a,b],[c,d]) {return a*c + b*d},
        cross: function ([a,b],[c,d]) {return a*d - b*c}
    }
})();
//solution.add([1, 1], [1, 0]);
//solution.multiply([3.5, -2], 2);
//solution.length([3, -4]);
//solution.dot([1, 0], [0, -1]);
//solution.cross([3, 7], [1, 0]);