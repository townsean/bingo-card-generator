import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { BingoCardService } from '../service/bingo-card-service.js';

@inject(BingoCardService, Router)
export class CustomTheme {
    words = [];
    
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
    
    addWord(word) {
        this.words.push(word);
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

