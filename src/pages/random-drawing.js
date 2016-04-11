import { inject } from 'aurelia-framework';
import { BingoCardService } from '../service/bingo-card-service';

@inject(BingoCardService)
export class RandomDrawing {
    remainingWords = [];
    selectedWords = [];
    drawnWord = '';
    
    constructor (bingoCardService) {
        this.bingoCardService = bingoCardService;
    }
    
    activate (params) {
        return this.bingoCardService.getBingoThemeById(Number(params.id))
                                    .then(theme => this.theme = theme)
                                    .then( () => {
                                        this.remainingWords = JSON.parse(JSON.stringify(this.theme.words));
                                    });
    }
    
    /*
    * Removes a word from the pool of avaliable words and places it into
    * a pool of previously selected words to simulate the user randomly
    * drawing a slip of paper from a hat or a bowl.
    */
    draw() {
        let index = this.bingoCardService.getRandomInt(0, this.remainingWords.length);
        this.drawnWord = this.remainingWords[index];
        
        this.selectedWords.push(this.drawnWord);
        this.remainingWords.splice(index, 1);
    }
    
    /*
    * 
    */
    reset() {
        this.selectedWords = [];
        this.remainingWords = JSON.parse(JSON.stringify(this.theme.words));
        this.drawnWord = '';
    }
}