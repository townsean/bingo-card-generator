import { inject } from "aurelia-framework";
import { BingoCardService } from './bingo-card-service';

@inject(BingoCardService)
export class CardGenerator {    
    constructor(bingoCardService) {
        this.bingoCardService = bingoCardService;   
    }
    
    activate(params) {
        return this.bingoCardService.getById(Number(params.id))
                             .then(theme => this.theme = theme);
    }
}