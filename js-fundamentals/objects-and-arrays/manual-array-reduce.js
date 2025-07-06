function reduce(nums, fn, init) {
    var len = nums.length;
    if (len === 0) {
        return init;
    }
    var accum = init;
    for (var i = 0; i < len; i++) {
        accum += fn(accum, nums[i]) - accum;
    }
    return accum;
}
;
console.log(reduce([1, 2, 3], function (accum, curr) { return accum + curr; }, 0));
