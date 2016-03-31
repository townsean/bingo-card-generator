import { customElement, bindable } from 'aurelia-framework';

@customElement('bingo-card')
export class BingoCard {
    @bindable data;
    @bindable heading = "Sample Heading";
    @bindable subheading = "Sample subheading";
}