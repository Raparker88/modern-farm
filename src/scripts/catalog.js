

const contentElement = document.querySelector(".container")

export const catalog = (harvestedArr) => {
  
    contentElement.innerHTML += harvestedArr.map(plant => {
        return `<section class="plant"${plant.type}</section>`
    }).join("")

}

export const tableMaker = (table) => {
    contentElement.innerHTML += `
        <table>
            <tr>
                <th>Food</th>
                <th>Quantity</th>
            </tr>
            ${table}
        </table>
        `
}


