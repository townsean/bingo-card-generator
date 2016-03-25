import { inject } from "aurelia-framework";
import { BingoData } from './bingo-data';

@inject(BingoData)
export class CardGenerator {    
    constructor(bingoData) {
        this.bingoData = bingoData;   
    }
    
    activate(params) {
        return this.bingoData.getById(Number(params.id))
                             .then(theme => this.theme = theme);
    }
}