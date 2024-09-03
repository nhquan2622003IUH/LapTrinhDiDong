Array.prototype.myFilter = function (cbfn) {
    len = this.length;
    var newArr = [];
    for (let i = 0; i < len; i++) {
        if (cbfn(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

const nums = [5, 2, 6, 11, 7];
var resultNums = nums.myFilter((ele, i, arr) => {
    // console.log(i);
    // console.log(arr);
    return ele > 5;
});
console.log('Result of nums:', resultNums);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const resultWords = words.myFilter((ele, i, arr) => {
    // console.log(i);
    // console.log(arr);
    return ele.length > 6;
});
console.log('Result of works:', resultWords);