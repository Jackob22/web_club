'use strict';

const reviewsList = document.querySelector('.fans-reviews'),
    formButton = document.querySelector('.fam-form__btn'),
    formText = document.querySelector('.fan-form__input');

formButton.addEventListener('click', (event) =>{
    event.preventDefault();
    const dateDay = new Date().toLocaleDateString();
    const dateTime = new Date().
        toLocaleTimeString('en-GB', {hour: 'numeric',minute:'numeric'});
    if(formText.value){
        const item = document.createElement('li')
        item.className = 'fan-review__item'
        item.innerHTML =
            `<p class="fan-review__text">${formText.value}</p>
       <div class="fan-review-footer">
           <div class="fan-review__date">${dateDay} <span>${dateTime}</span></div>
           <div class="fan-review__author">new User</div>
       </div>
    `;
        reviewsList.append(item);
        formText.value = '';
    }
})










