import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class BingoCardService {
    customThemeWords = [];
    
    constructor(http) {
        http.configure(config => {
            config
                .withBaseUrl('./src/service');
        });
        
        this.http = http;
    }
    

    getAllBingoThemes() {
        return this.http.fetch('/bingo-themes.json')
                        .then(response => response.json())
                        .then(themes => this.themes = themes);
    }

    getBingoThemeById(id) {
        let promise = new Promise((resolve, reject) => {
            this.getAllBingoThemes()
                .then(themes => { 
                    for (let theme of themes) {            
                        if( theme.id === id ) {           
                            resolve(theme);
                        }
                    }
                });
        });
        
        return promise;   
    }
    

    setCustomBingoThemeWords(words) {
        this.customThemeWords = words;
    }

    getCustomBingoThemeWords() {
        return this.customThemeWords;
    }
    
    /*
    * Randomly fill an array representing a bingo card with 
    * words selected from parameter words array
    * @param {Array} words
    * @return {Array} cardData
    */
    getBingoCardData(words) {
        let cardData = [];
        let usedWords = [];
        const BINGO_CARD_LENGTH = 25;
        const BINGO_CARD_MIDDLE_INDEX = 12; 
        
        for(let i = 0; i < BINGO_CARD_LENGTH; i++) {
            if (i === BINGO_CARD_MIDDLE_INDEX) {
                cardData[i] = "BINGO";
            } else {
                let index = this.getRandomInt(0, words.length - 1);
                
                while( usedWords[index] ) {
                    index = this.getRandomInt(0, words.length - 1);
                }
                
                usedWords[index] = true;
                cardData[i] = words[index];                
            }
        }
        
        return cardData;
    }
    
    
    /*
    * Returns a random integer between min (included) and max (excluded)
    * Using Math.round() will give you a non-uniform distribution!
    * source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    */
    getRandomInt = function (min, max) {            
        return Math.floor(Math.random() * (max - min)) + min;
    }
}