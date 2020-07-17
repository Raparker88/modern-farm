console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()


import { plantSeeds } from "./tractor.js"
plantSeeds(yearlyPlan)

import { usePlants } from "./field.js"

const seedsPlanted = usePlants()

import { harvestPlants } from "./harvester.js"

const plantsHarvested = harvestPlants(seedsPlanted)
console.log(plantsHarvested)


import {catalog} from "./catalog.js"

catalog(plantsHarvested)
