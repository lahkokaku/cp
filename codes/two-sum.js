// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = (nums, target) => {
//     let answer = []

//     for(let i = 0; i < nums.length; i++){
//         for(let j = i; j < nums.length; j++){
//             if(i == j) continue;
//             if(nums[i] + nums[j] === target){
//                 answer.push(i);
//                 answer.push(j);
//                 break;
//             }
//         }
//     }

//     return answer
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)]
        }
    }

    return []
};