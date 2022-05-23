function calculateMean (list) {
    const sumList = list.reduce((preValue = 0, curValue) => preValue + curValue)
    const meanList = sumList / list.length
    return meanList
}

function showMean(){
    const inputList = document.getElementById("inputList")
    const list = Array.from(inputList.value.split(","), Number)

    meanResult.innerText = calculateMean(list).toFixed(2)
}