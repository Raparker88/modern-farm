
let harvestedPlantsArray = []

export const harvestPlants = (plantsArray) => {
    for (const plantObj of plantsArray){
        if (plantObj.type === "Corn"){
            for (var i = 0; i < plantObj.output/2; i++){
                harvestedPlantsArray.push(plantObj)
            }
        }else{
            for (var i = 0; i < plantObj.output; i++)  {
                harvestedPlantsArray.push(plantObj)
            }
        }
    }
    return harvestedPlantsArray

}