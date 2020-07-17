

const contentElement = document.querySelector(".container")

export const catalog = (harvestedArr) => {
    harvestedArr.forEach(plant => {
        contentElement.innerHTML += `
            <section class="plant">${plant.type}</section>
            `
    });
}