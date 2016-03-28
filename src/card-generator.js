import { inject } from "aurelia-framework";
import { BingoCardService } from './bingo-card-service';

@inject(BingoCardService)
export class CardGenerator {    
    constructor(bingoCardService) {
        this.bingoCardService = bingoCardService;   
    }
    
    activate(params) {
        return this.bingoCardService.getBingoThemeById(Number(params.id))
                                    .then(theme => this.theme = theme)
                                    .then( () => {
                                        this.cards = [];
                                        for(let i = 0; i < 25; i++) {
                                            this.cards[i] = this.bingoCardService.getBingoCardData(this.theme.words);
                                        }
                                    });
    }
}