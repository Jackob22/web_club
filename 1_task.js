'use strict';

/* TASK 1 */
const list = document.querySelector('#list'),
    items = document.querySelectorAll('li');

// /* 1 way */

items[0].after(items[4]);
items[3].after(items[2]);

/* 2 way */

// for(let i = 1; i< items.length; i++)
//     items[i].remove();
// list.append(items[4]);
// list.append(items[1]);
// list.append(items[3]);
// list.append(items[2]);
