import {useTypes} from "./plan.js"
const foodTypes = useTypes()

export const foodToTableHTML = (harvestObj) => {
    let foodHTML = ""

    foodTypes.forEach(type => {
        foodHTML += `
            <tr>
                <td>${type}</td>
                <td>${harvestObj[type]}</td>
            </tr>
        `
    });
    return foodHTML
}