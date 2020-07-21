import {useTypes} from "./plan.js"



export const sortFood = (foodArr) => {
    const foodTypes = useTypes()
    let sortedFood = {}

    foodTypes.forEach(foodItem => {
        let typeArr = foodArr.filter(plant => plant.type === foodItem)
        sortedFood[foodItem] = typeArr.length 

    })
    
    return sortedFood
    
}

