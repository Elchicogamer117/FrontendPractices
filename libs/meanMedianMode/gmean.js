function calculateGmean(list){
    const multList = list.reduce((a,b) => a * b)
    const squareList = multList ** (1 / list.length)
    return squareList
}

function showGMean(){
    const inputList = document.getElementById("inputList")
    const list = Array.from(inputList.value.split(","), Number)
    
    operatioResult.innerText = calculateGmean(list).toFixed(2)
    description.innerText = "The geometric mean is an average that is useful for sets of positive numbers, that are interpreted according to their product (as is the case with rates of growth) and not their sum (as is the case with the arithmetic mean)"
}