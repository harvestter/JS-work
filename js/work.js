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





function rot13(str) {
let strNew = [];
let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
for(let i=0; i < str.length; i++) {
    if(str[i] == " "|str[i] == "!"|str[i] == "?"|str[i] == ".") {
        strNew.push(str[i]);
    } else {
        for(let j=0; j < arr.length; j++) {
            if(arr[j] == str[i] && j >= 13) {
            strNew.push(arr[j - 13]);   
            } else if (arr[j] == str[i]) {
                strNew.push(arr[j + 13]);    
            }
        }
        
    }
}

    return strNew.join('');
  }
  
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR CVMMN!"));