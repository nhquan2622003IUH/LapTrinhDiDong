const nums = [2, -5, 3, 7];

Array.prototype.myReduce = function (cbfn) {
    let accumulator = 0;
    for (let i = 0; i < this.length; i++) {
        accumulator = cbfn(accumulator, this[i], i, this);
    }
    return accumulator || 0;
}

const initialValue = 10;
const sumWithInitial = nums.myReduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);
console.log(sumWithInitial);