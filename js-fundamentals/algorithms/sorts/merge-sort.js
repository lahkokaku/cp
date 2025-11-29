const merge = (sub1, sub2) => {
  let i = 0, j = 0

  const res = []

  while (i < sub1.length && j < sub2.length) {
    if (sub1[i] < sub2[j]) {
      res.push(sub1[i])
      i++
    } else {
      res.push(sub2[j])
      j++
    }
  }

  res.push(...sub1.slice(i))
  res.push(...sub2.slice(j))

  return res
}

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr
  }
  const midIndex = parseInt(arr.length / 2)

  const subArr1 = arr.slice(0, midIndex)
  const subArr2 = arr.slice(midIndex, arr.length)

  return merge(mergeSort(subArr1), mergeSort(subArr2))
}

console.log(mergeSort([5, 4, 3, 2, 1]))