const list = [
    100,
    200,
    300,
    500
]
// let sumList = 0 
//* Solution 1 : Traditional
// for (let i=0; i < list.length; i++){
//     sumList = sumList + list[i]
// }
//* Solution 2 : Iteration
// for (let element of list){
//     sumList = sumList + element
// }
//*Solution 3 : Method reduce
const sumList = list.reduce((preValue = 0, curValue) => preValue + curValue)

const meanList = sumList / list.length

console.log(sumList)
console.log(meanList)

