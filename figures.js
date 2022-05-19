// Square code
const squarePerimeter = (side) => side * 4
const squareArea = (side) =>  side**2
// Triangle code
const trianglePerimeter = (side1, side2, base) => side1 + side2 + base
const triangleArea = (side1, side2, base) => {
    const s = trianglePerimeter(side1, side2, base)/2
    return Math.sqrt(s*(s - side1)*(s - side2)*(s - base)) 
} 
// Cicle code
const pi = Math.PI
const circleDiameter = (radio) => radio * 2
const circlePerimeter = (radio) => {
    diameter = circleDiameter(radio)
    return  diameter * Math.PI
} 
const circleArea = (radio) => Math.PI * (radio**2)
