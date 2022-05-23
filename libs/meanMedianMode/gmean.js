function calculateGmean(list){
    const multList = list.reduce((a,b) => a * b)
    const squareList = multList ** (1 / list.length)
    return squareList
}
console.log(calculateGmean([2,2,4]).toFixed(8))