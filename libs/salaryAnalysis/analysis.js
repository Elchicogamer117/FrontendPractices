const salarysReach = reach.map((person) => person.salary);
const orderedSalReach = salarysReach.sort((a,b) => a - b);

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
console.log(reach);
console.log(salarysReach);
console.log(orderedSalReach);
console.log(calculateMedian(orderedSalReach));