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

//* Less code, more execution time
function mode(arr){
    return arr.sort((a,b) =>
        arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

function showMode(){
    const inputList = document.getElementById("inputList")
    const list = Array.from(inputList.value.split(","), Number)

    modeResult.innerText = mode(list)
}
