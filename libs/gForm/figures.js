const squarePerimeter = (side) => side * 4
const squareArea = (side) =>  side**2

const trianglePerimeter = (side1, side2, base) => side1 + side2 + base
const triangleArea = (side1, side2, base) => {
    const s = trianglePerimeter(side1, side2, base)/2
    return Math.sqrt(s*(s - side1)*(s - side2)*(s - base)) 
} 

const pi = Math.PI
const circleDiameter = (radio) => radio * 2
const circlePerimeter = (radio) => {
    diameter = circleDiameter(radio)
    return  diameter * Math.PI
} 
const circleArea = (radio) => Math.PI * (radio**2)

function calculeSquare(){
    const input = document.getElementById("squareInput")
    const pResponse = document.getElementById("pResult")
    const aResponse = document.getElementById("aResult")

    const value = input.value
    pResponse.innerHTML = squarePerimeter(value).toPrecision(6)
    aResponse.innerHTML = squareArea(value).toPrecision(6)
}

function calculeTriangle(){
    const input1 = document.getElementById("side1Input")
    const input2 = document.getElementById("side2Input")
    const input3 = document.getElementById("baseInput")
    const pResponse = document.getElementById("pResult")
    const aResponse = document.getElementById("aResult")

    const side1 = parseFloat(input1.value, 10) 
    const side2 = parseFloat(input2.value, 10) 
    const base = parseFloat(input3.value, 10) 
    pResponse.innerHTML = trianglePerimeter(side1,side2,base).toPrecision(6)
    aResponse.innerHTML = triangleArea(side1,side2,base).toPrecision(6)
}

function calculeCircle(){
    const input1 = document.getElementById("circleInput")
    const pResponse = document.getElementById("pResult")
    const aResponse = document.getElementById("aResult")
    const radio = parseFloat(input1.value, 10) 

    pResponse.innerHTML = circlePerimeter(radio).toPrecision(6)
    aResponse.innerHTML = circleArea(radio).toPrecision(6)
}