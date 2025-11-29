function designerPdfViewer(h, word) {
    // Write your code here
    const getMax = (a, b) => a > b ? a : b
    
    let maxHeight = 0
    const wordLen = word.length
    
    for (let i = 0; i < wordLen; i++) {
        const currCharUtfCode = `${word[i]}`.charCodeAt(0)
        const currCharHeight = h[currCharUtfCode - "a".charCodeAt(0)]
        maxHeight = getMax(maxHeight, currCharHeight)
    }
    
    return maxHeight * wordLen
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'))