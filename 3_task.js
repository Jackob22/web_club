'use strict';

const button = document.querySelector('button'),
    container = document.querySelector('.container');

container.style.marginTop = '15px';

button.addEventListener('click',
    () => addText('I was pressed!'));
button.addEventListener('mouseenter',
    () => addText('Mouse on me!'));
button.addEventListener('mouseleave',
    () => addText('Mouse is not on me!'));

const addText = (text) => {
    let item = document.createElement('div');
    item.textContent = text;
    container.append(item);
}