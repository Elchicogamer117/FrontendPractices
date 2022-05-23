// const list = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9]
const list = [1,2,5,3,9,7,1,3,5,8,1,5,4,6,8,0,0,6,7,9,4,8,2,3,3,1,6,5,2,0,3,7,8]

const objectList = {}
list.map((element) => {
    if(objectList[element]){
        objectList[element] += 1;
    } else {
        objectList[element] = 1;
    }
})

const orderedList = Object.entries(objectList).sort((a,b) => b[1] - a[1])

const mode = orderedList[0]
console.log(mode)
