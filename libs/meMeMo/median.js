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

function showMedian(){
    const inputList = document.getElementById("inputList")
    const list = Array.from(inputList.value.split(","), Number)

    operatioResult.innerText = calculateMedian(list).toFixed(2)
    description.innerText = "The median is the value separating the higher half from the lower half of a data sample, a population, or a probability distribution."
}
