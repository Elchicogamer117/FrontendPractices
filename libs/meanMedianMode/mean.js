function calculateMean (list) {
    const sumList = list.reduce((preValue = 0, curValue) => preValue + curValue)
    const meanList = sumList / list.length
    return meanList
}

function showMean(){
    const inputList = document.getElementById("inputList")
    const list = Array.from(inputList.value.split(","), Number)

    operatioResult.innerText = calculateMean(list).toFixed(2)
    description.innerText = "The arithmetic mean or arithmetic average, or simply just the mean or the average (when the context is clear), is the sum of a collection of numbers divided by the count of numbers in the collection"
}