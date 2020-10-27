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




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('How many movies do you watch?', '');
    
        while (personalMovieDB.count =='' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies do you watch?', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
    
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('viewed a few movies');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('you are a classic viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log('are you a movie fan');
        } else {
            console.log('misstake');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = fa;
        } else {
            personalMovieDB.privat = true;
        }    
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`your favorite genre under the number ${i}`);

            if(genre === '' || genre == null) {
                console.log('Вы ввели некоректные данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} -это ${item}`)
        });
    }
     
};

