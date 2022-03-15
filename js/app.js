const netflix = document.querySelector('#netflix')

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', getPlattform)

    netflix.addEventListener('click', llamada);
}

function llamada() {
    console.log('netflix');
}

function getPlattform() {
    const url = 'http://localhost:4000/platforms';
    fetch(url)
        .then(respuesta => respuesta.json()) //Lee el json
        .then(resultado => console.log(resultado)) //Muestra en HTML
        .catch(e => console.log(e))
}

function showPlataforms() {
    const divPlattaform = document.createElement('div');
    divPlattaform.classList('')
}