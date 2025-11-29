/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort()

    const res = [folder[0]]

    for (let i = 1; i < folder.length; i++) {
        let lastFolder = res[res.length - 1]
        lastFolder += '/'

        if (!folder[i].startsWith(lastFolder)) {
            res.push(folder[i])
        }

    }

    return res
};