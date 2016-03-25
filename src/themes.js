import { inject } from 'aurelia-framework';
import { BingoData } from './bingo-data';

@inject(BingoData)
export class Themes {
    themes = [];
    
    constructor(bingoData) {
        this.bingoData = bingoData;
    }
    
    activate() {
        return this.bingoData.getAll()
                             .then(themes => this.themes = themes);
    }
}