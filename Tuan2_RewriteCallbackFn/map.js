a = [5, 2, 8];

Array.prototype.myMap = function (cbfn) {
    len = this.length;
    var newArr = [];
    for (var i = 0; i < len; i++) {
        newArr.push(cbfn(this[i], i, this));
    }
    return newArr;
}

var b = a.myMap((ele, index, arr) => {
    console.log("Old array", arr);
    console.log("index:", index);
    return ele * 2;
});
console.log(b);