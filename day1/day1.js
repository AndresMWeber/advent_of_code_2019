// Part One
const { data } = require('./input.json')

const calculateFuelFromMass = mass => {
    return Math.floor(mass / 3) - 2
}

const calculateFuelFromMasses = masses => {
    return masses.reduce((total, mass) => total += calculateFuelFromMass(mass), 0)
}

console.log(`Fuel required (part one) is: ${calculateFuelFromMasses(data)}`)

// Part Two
const calculateFuelFromMassRecursive = mass => {
    let recursiveFuel = 0
    while (mass > 0) {
        mass = calculateFuelFromMass(mass)
        if (mass > 0) recursiveFuel += mass
    }
    return recursiveFuel
}

const calculateFuelFromMassesRecursive = masses => {
    return masses.reduce((total, mass) => total += calculateFuelFromMassRecursive(mass), 0)
}

console.log(`Fuel required (part two) is: ${calculateFuelFromMassesRecursive(data)}`)