const list = [
    1000,
    40,
    50,
    70,
    900,
    200000,
    1
]

const orderedList = list.sort((a , b) => a - b)
console.log(orderedList)

const middleList = parseInt(list.length/2)

// function isEven(list){
//     if (list % 2 === 0){
//         return true
//     } else {
//         return false
//     }
// }

let media

if(orderedList.length % 2 === 0){
    media = (orderedList[middleList] + orderedList[middleList - 1])/2 
} else {
    media = orderedList[middleList]
}

console.log(media)