

const contentElement = document.querySelector(".container")

export const catalog = (harvestedArr) => {
    harvestedArr.forEach(plant => {
        contentElement.innerHTML += `
            <section class="plant">${plant.type}</section>
            `
    });
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


