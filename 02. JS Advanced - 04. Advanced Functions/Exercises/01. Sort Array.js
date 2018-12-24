function sortArray (arr,arg) {
    let ascendingComparator = function (a,b) {
        return a-b;
    };
    let descendingComparator = function (a,b) {
        return b-a;
    };
    let sortingStrategies = {
        "asc": ascendingComparator,
        "desc": descendingComparator
    };
    return arr.sort(sortingStrategies[arg]);
}
sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');