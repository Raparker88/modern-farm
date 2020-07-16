console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()


import { plantSeeds } from "./tractor.js"
plantSeeds(yearlyPlan)

import { usePlants } from "./field.js"

const seedsPlanted = usePlants()

import { harvestedPlants } from "./harvester.js"

const plantsHarvested = harvestedPlants(seedsPlanted)

console.log(plantsHarvested)