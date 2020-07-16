console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()


import { plantSeeds } from "./tractor.js"
plantSeeds(yearlyPlan)

import { usePlants } from "./field.js"

const plantsTest = usePlants()

console.log (plantsTest)