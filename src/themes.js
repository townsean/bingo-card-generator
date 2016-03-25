import { inject } from 'aurelia-framework';
import { BingoCardService } from './bingo-card-service';

@inject(BingoCardService)
export class Themes {
    themes = [];
    
    constructor(bingoCardService) {
        this.bingoCardService = bingoCardService;
    }
    
    activate() {
        return this.bingoCardService.getAll()
                             .then(themes => this.themes = themes);
    }
}