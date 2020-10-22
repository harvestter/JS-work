"use strict";

/*
//Вопросы пользователю и запись их в пустые объекты
const numberOfFilms = +prompt('How many movies do you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('one of the last viewed movies', ''),
      b = prompt('how much do you rate it for', ''),
      c = prompt('one of the last viewed movies', ''),
      d = prompt('how much do you rate it for', '');

personalMovieDB.movies[a] = b; //Добавление свойств в пустой объект
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);*/

const numberOfFilms = +prompt('How many movies do you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*
// Цикл FOR с проверкой того что пользователь ввел корректные данные

for (let i = 0; i < numberOfFilms; i++) {

    let a = prompt('one of the last viewed movies', ''),
        b = prompt('how much do you rate it for', '');
    
    if ( a != null && b != null && a != '' && b != "" && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log("error");
        i--;
    }      
}
 
if (personalMovieDB.count < 10) {
    console.log('viewed a few movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('you are a classic viewer');
} else if (personalMovieDB.count >= 30) {
    console.log('are you a movie fan');
} else {
    console.log('misstake');
}


console.log(personalMovieDB);*/