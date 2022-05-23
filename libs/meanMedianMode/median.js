function calculateMedian(list){
    const orderedList = list.sort((a , b) => a - b)
    const middleList = parseInt(orderedList.length/2)

    let median
    if (orderedList.length % 2 === 0){
        median = (orderedList[middleList] + orderedList[middleList - 1])/2 
    } else {
        median = orderedList[middleList]
    }
    return median
}

console.log(calculateMedian([2000,10,800,1,50,10000]));
console.log(calculateMedian([2000,10,10000,800,1,50,20]));