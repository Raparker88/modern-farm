

let allPlants = []


export const addPlant = (seedObj) => {
    if (seedObj.isArray) {
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