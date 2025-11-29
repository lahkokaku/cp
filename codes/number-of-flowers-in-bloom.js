/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    const flowerCount = new Map()

    for (const [bloom, end] of flowers) {
        flowerCount.set(bloom, (flowerCount.get(bloom) || 0) + 1 )
        flowerCount.set(end + 1, (flowerCount.get(end + 1) || 0) - 1 )
    }

    const flowerDays = Array.from(flowerCount.keys()).sort((a, b) => a - b)

    let totalFlower = 0
    for (const day of flowerDays) {
        totalFlower += flowerCount.get(day) || 0
        flowerCount.set(day, totalFlower)
    }

    const res = []
    for (const peopleDay of people) {
        const idx = flowerDays.findIndex(day => day > peopleDay)

        if (idx === -1) {
            res.push(0)
        } else {
            res.push(flowerCount.get(flowerDays[idx - 1]) || 0)
        }
    }

    return res
};

console.log(fullBloomFlowers([[1,6],[3,7],[9,12],[4,13]], [2,3,7,11]))