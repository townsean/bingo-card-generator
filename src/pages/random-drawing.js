import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { BingoCardService } from '../service/bingo-card-service';

@inject(BingoCardService, Router)
export class RandomDrawing {
    remainingWords = [];
    selectedWords = [];
    drawnWord = '';
    
    constructor (bingoCardService, router) {
        this.bingoCardService = bingoCardService;
        this.router = router;
    }
    
    activate (params) {
        if(params.id === 'custom') {
            let promise = new Promise((resolve, reject) => {
                this.words = this.bingoCardService.getCustomBingoThemeWords();
                this.remainingWords = JSON.parse(JSON.stringify(this.words));
                resolve();
            });
            
            return promise;
        }
        
        return this.bingoCardService.getBingoThemeById(Number(params.id))
                                    .then(theme => this.words = theme.words)
                                    .then( () => {
                                        this.remainingWords = JSON.parse(JSON.stringify(this.words));
                                    });
    }
    
    /**
    * Removes a word from the pool of avaliable words and places it into
    * a pool of previously selected words to simulate the user randomly
    * drawing a slip of paper from a hat or a bowl.
    */
    draw() {
        if( this.remainingWords.length === 0 ) {
            return;
        }
        
        let index = this.bingoCardService.getRandomInt(0, this.remainingWords.length);
        this.drawnWord = this.remainingWords[index];
        
        this.selectedWords.push(this.drawnWord);
        this.remainingWords.splice(index, 1);
    }
    
    /**
    * Clear the collection of selected words and restore the remaining words to
    * the original words list to begin a new bingo game
    */
    reset() {
        this.selectedWords = [];
        this.remainingWords = JSON.parse(JSON.stringify(this.words));
        this.drawnWord = '';
    }
    
    /***
     * Return to the previous route
     */
    back() {
        this.router.navigateBack();
    }
}