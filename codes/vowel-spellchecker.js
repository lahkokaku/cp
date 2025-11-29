const isVowel = char => {
    switch (char.toLowerCase()) {
        case 'a':
        case 'i':
        case 'u':
        case 'e':
        case 'o':
            return true
        default:
            return false
    }
}

const constructKey = word => {
    let key = ""
    const normalizedWord = word.toLowerCase()

    for (let i = 0; i < normalizedWord.length; i++) {
        if (isVowel(normalizedWord[i])) {
            key += '*'
        } else {
            key += normalizedWord[i]
        }
    }

    return key
}

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    const wordMap = new Map()

    // Fill wordMap
    for (let i = 0; i < wordlist.length; i++) {
        const key = constructKey(wordlist[i])

        const mappedWords = wordMap.get(key)
        if (mappedWords) {
            wordMap.set(key, [...mappedWords, wordlist[i]])
        } else {
            wordMap.set(key, [wordlist[i]])
        }
    }

    // Compare queries to constructed wordMap
    const res = []

    for (let i = 0; i < queries.length; i++) {
        const key = constructKey(queries[i])
        const mappedWords = wordMap.get(key) 
        
        // Word doesn't exist
        if (!mappedWords) {
            res.push("")
            continue
        }

        // Word exist and matches a mappedWord
        if (mappedWords.includes(queries[i])) {
            res.push(queries[i])
            continue
        }

        // Find closest matching word
        let found = false
        for (let j = 0; j < mappedWords.length; j++) {
            if (mappedWords[j].toLowerCase() === queries[i].toLowerCase()) {
                res.push(mappedWords[j])
                found = true
                break
            }
        }

        // No closest matching word found
        if (!found) {
            res.push(mappedWords[0])
        }
    }

    return res
};