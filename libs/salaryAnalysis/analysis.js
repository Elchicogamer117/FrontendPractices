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

const salarysReach = reach.map((person) => person.salary);
const orderedSalReach = salarysReach.sort((a,b) => a - b);

const start = (orderedSalReach.length / 10) * 9;
const end = orderedSalReach.length;
const topSalaryReach = orderedSalReach.slice(start,end);

const generalMedianReach = calculateMedian(orderedSalReach);
const topMedianReach = calculateMedian(topSalaryReach);

const generalMeanReach = calculateMean(salarysReach);
const topMeanReach = calculateMean(topSalaryReach);

console.log( orderedSalReach);
console.log({
    generalMedianReach,
    topMedianReach,
});
console.log({
    generalMeanReach,
    topMeanReach,
});

