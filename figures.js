//Square code
const squareSide = 5
const squarePerimeter = squareSide * 4
const squareArea = squareSide * squareSide 

console.log(`For a square of ${squareSide}cm by side, the perimeter is ${squarePerimeter}cm and the area is ${squareArea}cm^2`)

//Triangle code
const triangleSide1 = 6
const triangleSide2 = 6
const triangleSideBase = 4
const trianglePerimeter = triangleSide1 + triangleSide2 + triangleSideBase
const s = trianglePerimeter/2 //*? semiperimeter
const triangleArea = Math.sqrt(s*(s - triangleSide1)*(s - triangleSide2)*(s - triangleSideBase)) //*? for any triangle knowing only the sides


console.log(`For a triangle with ${triangleSideBase}cm of base and ${triangleSide1} and ${triangleSide1}cm of each side, 
    the perimeter is ${trianglePerimeter}cm and the area is ${parseFloat(triangleArea.toFixed(2))}cm^2`)  

//Circle code
const circleRadio = 4
const circleDiameter = circleRadio * 2
const pi = Math.PI
const circlePerimeter = circleDiameter * pi
const circleArea = pi * (circleRadio**2)

console.log(`For a circle with ${circleRadio}cm of radio we have a 
    perimeter of ${circlePerimeter.toFixed(2)}cm and an area of ${circleArea.toPrecision(4)}cm^2`) 