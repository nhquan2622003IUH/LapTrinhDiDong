const nums = [1, 3, 3, 3, 5];

Array.prototype.mySome = function (cbfn) {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
        if (cbfn(this[i], i, this)) {
            count++;
        }
    }
    return count > 0;
}
rs = nums.mySome((ele, index, arr) => {
    // console.log(arr);
    // console.log(index);
    return ele % 2 === 0;
});
console.log(rs);