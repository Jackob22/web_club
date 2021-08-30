'use strict';

const title  = document.querySelector('h1'),
    blockDivItems = document.querySelector('#myDiv').children,
    myList = document.querySelector('#myList'),
    span = document.querySelector('span');

title.setAttribute('style', 'background: lime');

blockDivItems[0].setAttribute('style', 'font-weight: bold');
blockDivItems[1].setAttribute('style', 'color: red');
blockDivItems[2].style.textDecoration = 'underline';
blockDivItems[3].style.fontStyle = 'italic';

myList.style.cssText = 'display: flex; list-style-type: none';
span.style.display = 'none';