

let allPlants = []


export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        for (const seed of seedObj) {
            allPlants.push(seed)
        }
    }else{
        allPlants.push(seedObj)
    }

}


export const usePlants = () => {
    return allPlants.slice()
}