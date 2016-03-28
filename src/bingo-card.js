import { customElement, bindable } from 'aurelia-framework';

@customElement('bingo-card')
export class BingoCard {
    @bindable data;
}