function calculateMean (list) {
    const sumList = list.reduce((preValue = 0, curValue) => preValue + curValue)
    const meanList = sumList / list.length
    return meanList
}

function calculateMedian(list){
    const middle = parseInt(list.length / 2)

    if (list.length % 2 === 0){
        const median = (list[middle - 1] + list[middle]) / 2
        return median
    } else {
        const median2 = list[middle]
        return median2
    }
}

function calculateAnalysis(){
    const salarysReach = reach.map((person) => person.salary);
    const orderedSalReach = salarysReach.sort((a,b) => a - b);

    const start = (orderedSalReach.length / 10) * 9;
    const end = orderedSalReach.length;
    const topSalaryReach = orderedSalReach.slice(start,end);

    medianGeneral.innerText = calculateMedian(orderedSalReach);
    medianTop.innerText = calculateMedian(topSalaryReach);

    meanGeneral.innerText = calculateMean(salarysReach);
    meanTop.innerText = calculateMean(topSalaryReach);
    
}

function addingCitizen(){
    const inputName = document.getElementById("inputName")
    const inputSalary = document.getElementById("inputSalary")

    const name = inputName.value
    const salary = parseInt(inputSalary.value)

    reach.push({
        name: name || 'Soldier',
        salary: salary || 15,
    })

    let listCitizens = "<ol>"
    for (let citizen of reach){
        listCitizens += `<li>  ${citizen.name}: ${citizen.salary} cdt </li>`
    }
    listCitizens += "</ol>"

    citizens.innerHTML = listCitizens
}

let listCitizens = "<ol>"
    for (let citizen of reach){
        listCitizens += `<li>  ${citizen.name}: ${citizen.salary} cdt </li>`
    }
    listCitizens += "</ol>"

    citizens.innerHTML = listCitizens