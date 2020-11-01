"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '50%';

circles[0].style.backgroundColor = 'red';


hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
div.classList.add('black');
document.body.append(div); 

wrapper.append(div);
div.innerHTML = '<h1>Hello</h1>';

div.insertAdjacentHTML('beforeend', '<h1>WORLD</h1>')


let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];