const s1 = {a:1,b:2,c:3}
const s2 = [4,5,6]
for (let i in s1) {
  console.log(s1[i])
}
for (let i of s2) {
  console.log(i)
}