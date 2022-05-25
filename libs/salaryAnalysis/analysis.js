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

const percent = (orderedSalReach.length / 10) * 9
const frags = orderedSalReach.length / 10
const topSalaryReach = orderedSalReach.splice(percent,frags);

const generalMedianReach = calculateMedian(orderedSalReach);
const topMedianReach = calculateMedian(topSalaryReach);

console.log(orderedSalReach);
console.log({
    generalMedianReach,
    topMedianReach,
});
