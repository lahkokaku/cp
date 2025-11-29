function hurdleRace(k, height) {
    // Write your code here
    
    const getMax = (a, b) => a > b ? a : b
    
    let minDose = 0
    
    for (const currHeight of height) {
        minDose = getMax(minDose, currHeight - k)
    }
    
    return minDose
}

console.log(hurdleRace(1 ,[1, 2, 3, 3, 2]))