import { LightningElement, track } from 'lwc';

export default class TrackDemo extends LightningElement {

    //Is product Property is REACTIVE : yes
    @track
    products = ['Tshirt', 'Lux', 'Colgate', 'Cumin']; // address products  = 1001

    name = "Shubham";


    handleClick() {
        // this.products = ['Dove', 'Santoor'];     // address products  = 2001

        this.products.push('Pears'); // Here reference will not change they only add item on same address
        this.name = this.name + ' Kumar';
    }
}