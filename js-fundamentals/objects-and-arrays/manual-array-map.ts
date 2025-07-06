function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const len: number = arr.length
    let newArr: number[] = []
    for (let i: number = 0; i < len; i++) {
        newArr.push(fn(arr[i], i))
    }
    return newArr
};

console.log(map([1, 2], function plusOne(n) { return n + 1 }))