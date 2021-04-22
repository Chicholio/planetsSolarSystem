var name_planets = Array("Mercurio", "Venus", "Tierra")
let distance = [3, 4, 5, "67"]
const size = [102, 891, 200, 97]
const planets = []

const planet = {
    name: "Tierra",
    size: 2740000,
    distanceTierra: 0,
    distanceSol: 18950000,
    minerals: ["mineral1", "mineral2", "mineral3"]
}

planets.push(planet)
planets.push({name: "Marte",
    size: 2150000,
    distanceTierra: 14888866,
    distanceSol: 34950000,
})

name_planets[3] = "Marte"

console.log(name_planets)
console.log(distance)
console.log(size)

console.log("---Planetas---")

console.log(planets)
console.log(planet)

console.log("---WHILE---")

let i = 0

while (i <= 3) {
    console.log(name_planets[i])
    i = i + 1
}

console.log("---FOR---")

for (let j = 0; j <= 3; j++) {
    console.log(distance[j]);
}

console.log("---FOR IN---")

for (const key in name_planets) {
    console.log(name_planets[key])
}

for (const key in distance) {
    if (distance[key] = "5") {
        console.log("Se encontro distancia 5")
    }
}

for (const key in distance) {
    if (distance[key] == "5") {
        console.log("Se encontro distancia 5")
    }
}

for (const key in distance) {
    if (distance[key] = '5') {
        console.log("Se encontro distancia 5")
    }
}

for (const key in distance) {
    if (distance[key] === 5) {
        console.log("Se encontro distancia 5")
    }
}

console.log("---FOR OF---")

for (const iterator of name_planets) {
    console.log(iterator)
}

console.log("---Functions---")
console.log("---SUMA VOID---")

sumarN()

function sumarN() {
    console.log(2 + 3)
}

console.log("---SUMA RETURN---")

console.log(sumarR(2 , 7))

function sumarR(n1, n2) {
    return n1 + n2
}

console.log("---RESTA FLECHA---")

let resta = (n1, n2) => n1 - n2

console.log(resta(8, 2))

console.log("---FOR EACH---")

name_planets.forEach(function myfuctioniteradora(planeta, index, arreglo){
    console.log("El planeta es: " + planeta, index, arreglo)
})

let resultadoFE = name_planets.forEach((planeta, index, arreglo) => {
    console.log("El planeta es: " + planeta, index, arreglo)
})

console.log(resultadoFE)

console.log("---MAP---")

let resultadoM = name_planets.map((planeta, index, arreglo) => {
    return "El tamaño de " + planeta + " es " + size[index]
})

console.log(resultadoM)

console.log("---FILTER---")

let resultadoFilter = size.filter((t) => {
    return t % 2 == 0
})

console.log(resultadoFilter)

console.log("---FIND---")

let resultadoFind = size.find((value) => {
    return value % 2 == 0
})

console.log(resultadoFind)

let resultadoFP= planets.find((planeta) => {
    return planeta.name.toLocaleLowerCase() == "marte"
})

console.log(resultadoFP)

console.log("---FIND INDEX---")

let resultadoFIm = name_planets.findIndex((p) => {
    return p.toLocaleLowerCase() == "tierra"
})

console.log(resultadoFIm)

let resultadoFIM = name_planets.findIndex((p) => {
    return p.toLocaleUpperCase() == "MARTE"
})

console.log(resultadoFIM)

console.log("---INCLUDES---")

let resultadoI = name_planets.includes("Tierra", 0)

console.log(resultadoI)