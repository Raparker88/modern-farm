

let allPlants = []


export const addPlant = (seedObj) => {
    allPlants.push(seedObj)
    if (seedObj.isArray) {
        for (const seed of seedObj) {
            allPlants.push(seed)
        }
    }

}


export const usePlants = () => {
    return allPlants.slice()
}