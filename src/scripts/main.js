console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()


import { plantSeeds } from "./tractor.js"
plantSeeds(yearlyPlan)

import { usePlants } from "./field.js"

const seedsPlanted = usePlants()

import { harvestPlants } from "./harvester.js"

const plantsHarvested = harvestPlants(seedsPlanted)

import {catalog} from "./catalog.js"


import {sortFood} from "./foodSorter.js"
const harvestObj = sortFood(plantsHarvested)
console.log(harvestObj)

import {foodToTableHTML} from "./FoodTableHTML.js"
const tableHTML = foodToTableHTML(harvestObj)
console.log(tableHTML)

import {tableMaker} from "./catalog.js"
tableMaker(tableHTML)

