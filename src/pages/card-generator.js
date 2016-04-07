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
                                        this.cards = this.getGeneratedCards();
                                    })
                                    .then( () => {
                                        this.subscription = this.bindingEngine.propertyObserver(this, 'cardCount')
                                                                              .subscribe( (newValue, oldValue) => {
                                                                                  this.cards = this.getGeneratedCards();
                                                                              });
                                    });
    }
    
    deactivate() {
        this.subscription.dispose();
    }
    
    /*
    *
    */
    getGeneratedCards() {
        let cards = [];
        
        for(let i = 0; i < this.cardCount; i++) {
            cards[i] = this.bingoCardService.getBingoCardData(this.theme.words);
        }
        
        return cards;
    }
    
    /*
    *
    */
    print () {
        
    }
}