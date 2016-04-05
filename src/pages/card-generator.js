import { inject } from "aurelia-framework";
import { BingoCardService } from '../service/bingo-card-service';

@inject(BingoCardService)
export class CardGenerator { 
    cardCount = 15;
       
    constructor(bingoCardService) {
        this.bingoCardService = bingoCardService;   
    }
    
    activate(params) {
        return this.bingoCardService.getBingoThemeById(Number(params.id))
                                    .then(theme => this.theme = theme)
                                    .then( () => {
                                        this.cards = [];
                                        for(let i = 0; i < this.cardCount; i++) {
                                            this.cards[i] = this.bingoCardService.getBingoCardData(this.theme.words);
                                        }
                                    });
    }
}