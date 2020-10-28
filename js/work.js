"use strict";
/*
const options = {
    name: 'test',
    width: 1024,
    heifht: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;

console.log(Object.keys(options).length);


let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key] ) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);


const arr = [1, 2, 3, 6, 8];

 for (let value of arr) {
     console.log(value);
 }
*/
const str = prompt('','');
const products = str.split(", ");
console.log(products);