const gridContainer = document.querySelector('.main__grid');
const descriptionDiv = document.querySelector('#description');

document.addEventListener("DOMContentLoaded", getPlatform);

function getPlatform() {
    const url = "http://localhost:4000/platforms";
    
    fetch(url)
        .then((response) => response.json()) //Lee el json
        .then((result) => createHTML(result)) //Muestra en HTML
        .catch((e) => console.log(e));
}

function createHTML(platforms) {
    platforms.forEach(platform => {
        const img = document.createElement('img');
        img.src = `${platform.image}`;
        img.alt = 'logo';

        const divLogo = document.createElement('div');
        divLogo.classList.add('main__image');

        const divCard = document.createElement('div');
        divCard.classList.add('main__card');

        divLogo.appendChild(img);

        const condition = document.createElement('p');
        condition.textContent = 'EN STOCK';

        divCard.appendChild(divLogo);
        divCard.appendChild(condition);

        gridContainer.appendChild(divCard);

        //Function description platform
        img.onclick = function () {
            descriptionHTML(platform);
        }

    });

}

function descriptionHTML(platform) {
    const textMain = document.querySelector('.main__head');
    const nameDiv = document.createElement('div');
    
    

    descriptionDiv.classList.remove('d-none');
    textMain.classList.add('d-none');
    gridContainer.classList.add('d-none');

}

function spinner() {
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('main__spinner', 'sk-circle');

    divSpinner.innerHTML = `  
    <div class="sk-circle1 sk-child"></div>
    <div class="sk-circle2 sk-child"></div>
    <div class="sk-circle3 sk-child"></div>
    <div class="sk-circle4 sk-child"></div>
    <div class="sk-circle5 sk-child"></div>
    <div class="sk-circle6 sk-child"></div>
    <div class="sk-circle7 sk-child"></div>
    <div class="sk-circle8 sk-child"></div>
    <div class="sk-circle9 sk-child"></div>
    <div class="sk-circle10 sk-child"></div>
    <div class="sk-circle11 sk-child"></div>
    <div class="sk-circle12 sk-child"></div>`;

    descriptionDiv.appendChild(divSpinner);
}