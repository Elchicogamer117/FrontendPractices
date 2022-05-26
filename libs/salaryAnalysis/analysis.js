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
    medianTop.innerText = calculateMedian(topSalaryReach).toFixed(2);

    meanGeneral.innerText = calculateMean(salarysReach).toFixed(2);
    meanTop.innerText = calculateMean(topSalaryReach).toFixed(2);
    console.log(orderedSalReach)
    console.log(medianGeneral)
    
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

    let listCitizens = ` <table> <tr> <th> Name </th> <th> Salary </th></tr>`
    for (let citizen of reach){
        listCitizens += `<tr> <td> ${citizen.name} </td> <td> ${citizen.salary} cdt </td> </tr>`
    }
    listCitizens += "</table>"

    citizens.innerHTML = listCitizens
    citizensCount.innerHTML = `List of citizens: ${reach.length} `
}

let listCitizens = ` <table> <tr> <th> Name </th> <th> Salary </th></tr>`
    for (let citizen of reach){
        listCitizens += `<tr> <td> ${citizen.name} </td> <td> ${citizen.salary} cdt </td> </tr>`
    }
    listCitizens += "</table>"

    citizens.innerHTML = listCitizens
    citizensCount.innerHTML = `List of citizens: ${reach.length} `