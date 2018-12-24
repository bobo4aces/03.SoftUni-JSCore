function aggregateElements (array) {
    aggregate(array,0,(a,b)=> a+b);
    aggregate(array,0,(a,b)=> a+1/b);
    aggregate(array,"",(a,b)=> a+b);
    function aggregate (array,initialValue,func) {
        let result = initialValue;
        for (let i=0; i<array.length; i++) {
            result = func(result,array[i]);
        }
        console.log(result);
    }
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);