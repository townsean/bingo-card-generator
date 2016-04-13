import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { BingoCardService } from '../service/bingo-card-service.js';

@inject(BingoCardService, Router)
export class CustomTheme {
    words = [];
    newWord = "";
    
    constructor(bingoCardService, router) {
        this.bingoCardService = bingoCardService;
        this.router = router;
    }
    
    activate() {
        let promise = new Promise((resolve, reject) => {
            this.words = this.bingoCardService.getCustomBingoThemeWords();
            resolve();
        });
        
        return promise;
    }
    
    onKeyDown(keycode) {
        if(keycode === "Enter") {
            addWord();
        }
    }
    
    addWord() {
        // I don't like this [ang 4/13/2016]
        this.words.push(this.newWord);
        this.newWord = "";
    }
    
    draw() {
        this.bingoCardService.setCustomBingoThemeWords(this.words);
        this.router.navigateToRoute('random-drawing', { id: 'custom'});
    }
    
    generate() {        
        this.bingoCardService.setCustomBingoThemeWords(this.words);
        this.router.navigateToRoute('card-generator', { id: 'custom'});
    }
}

