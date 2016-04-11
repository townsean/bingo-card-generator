import { inject, BindingEngine } from "aurelia-framework";
import { BingoCardService } from '../service/bingo-card-service';

@inject(BingoCardService, BindingEngine)
export class CardGenerator { 
    cardCount = 15;
       
    constructor(bingoCardService, bindingEngine) {
        this.bingoCardService = bingoCardService;  
        this.bindingEngine = bindingEngine; 
    }
    
    /*
    *
    */
    activate(params) {
        return this.bingoCardService.getBingoThemeById(Number(params.id))
                                    .then(theme => this.theme = theme)
                                    .then( () => {
                                        this.cards = this.getGeneratedCards(this.cardCount, this.theme.words);
                                        this.subscription = this.bindingEngine.propertyObserver(this, 'cardCount')
                                                                              .subscribe( (newValue, oldValue) => {
                                                                                  this.cards = this.getGeneratedCards(this.cardCount, this.theme.words);
                                                                              });
                                    });
    }
    
    deactivate() {
        this.subscription.dispose();
    }
    
    /*
    *
    */
    getGeneratedCards(count, words) {
        let cards = [];
        
        for(let i = 0; i < count; i++) {
            cards[i] = this.bingoCardService.getBingoCardData(words);
        }
        
        return cards;
    }
    
    /*
    *
    */
    print () {
        
    }
}