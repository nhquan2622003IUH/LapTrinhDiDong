const nums = [5, 12, 8, 130, 44];
const works = ['html', 'css', 'js', 'react'];

Array.prototype.myFind = function (cbfn) {
    for (let i = 0; i < this.length; i++) {
        if (cbfn(this[i], i, this))
            return this[i];
    }
}

rs = nums.myFind((ele, index, arr) => {
    // console.log(arr);
    // console.log(index);
    return ele > 10;
});
console.log('Result of nums: ', rs);

rs = works.myFind((ele, index, arr) => {
    // console.log(arr);
    // console.log(index);
    return ele === 'js';
});
console.log('Result of works: ', rs);
