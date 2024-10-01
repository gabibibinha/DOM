alert('Olá, seja bem-vindo!');
console.log('Mensagem exibida no console');

console.log('Largura: ' + window.innerWidth + 'px, Altura: ' + window.innerHeight + 'px');

localStorage.setItem('meuItem', 'Este é o valor armazenado no Local Storage');
console.log(localStorage.getItem('meuItem'));

var div = document.createElement('div');
div.id = 'meuDiv';
document.body.appendChild(div);

div.textContent = 'Este é um texto dentro do meuDiv';
div.style.backgroundColor = 'lightblue';
div.style.padding = '10px';
div.style.margin = '10px';
div.style.fontSize = '20px';

var p = document.querySelector('p');
if (p) {
    p.textContent = 'Este parágrafo foi modificado!';
    p.style.backgroundColor = 'yellow';
}

var img = document.querySelector('img');
if (img) {
    img.setAttribute('title', 'Imagem dinâmica');
}

var button = document.createElement('button');
button.textContent = 'Alterar conteúdo do div';
document.body.appendChild(button);

button.addEventListener('click', function() {
    div.textContent = 'O conteúdo do div foi alterado!';
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Tecla Enter foi pressionada');
    }
});

var ul = document.createElement('ul');
document.body.appendChild(ul);

function addItem(text) {
    var li = document.createElement('li');
    li.textContent = text;

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', function() {
        ul.removeChild(li);
    });

    li.appendChild(removeButton);
    ul.appendChild(li);
}

addItem('Item 1');
addItem('Item 2');
addItem('Item 3');