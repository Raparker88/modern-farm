console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()
console.log(yearlyPlan)

import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
console.log(cornSeed)

import { addPlant } from "./field.js"

addPlant(cornSeed)

import { usePlants } from "./field.js"

const plantsTest = usePlants()

console.log(plantsTest)
