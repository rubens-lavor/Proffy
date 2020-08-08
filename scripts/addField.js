const buttonAddTime = document.querySelector("#add-time");

buttonAddTime.addEventListener('click', cloneField)

function cloneField() {
    console.log('clicou');

    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    const fields = document.querySelectorAll('input');

    fields.forEach(function (fild) {
        fild.value = "";
    });

    document.querySelector('#schedule-itens').appendChild(newFieldContainer);

    
}