function calculateMode(list){
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
    return mode[0]
}

function mode(arr){
    return arr.sort((a,b) =>
        arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

function showMode(){
    const inputList = document.getElementById("inputList")
    const list = Array.from(inputList.value.split(","), Number)

    operatioResult.innerText = mode(list)
    description.innerText = "The mode is the value that appears most often in a set of data values. Like the statistical mean and median, the mode is a way of expressing, in a (usually) single number, important information about a random variable or a population. "
}