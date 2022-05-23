function calculateGmean(list){
    const multList = list.reduce((a,b) => a * b)
    const squareList = multList ** (1 / list.length)
    return squareList
}

function showGMean(){
    const inputList = document.getElementById("inputList")
    const list = Array.from(inputList.value.split(","), Number)
    
    gMeanResult.innerText = calculateGmean(list).toFixed(2)
}