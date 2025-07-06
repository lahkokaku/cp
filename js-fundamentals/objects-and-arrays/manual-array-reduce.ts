type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let len: number = nums.length
    if (len === 0) {
        return init
    }

    let accum: number = init

    for (let i: number = 0; i < len; i++) {
        accum = fn(accum, nums[i])
    }

    return accum
};

console.log(reduce([1, 2, 3], (accum: number, curr: number) => accum + curr, 0))