import { Component, Input } from '@angular/core';
import { IProduct } from '../data';

@Component({
    selector: 'course-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input()
    public product!: IProduct;

    @Input()
    public position!: number;

    @Input()
    public isOdd!: boolean;

}
