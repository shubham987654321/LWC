import { LightningElement } from 'lwc';

export default class ConditionalDemo extends LightningElement {
    show = true;

    handleChange() {
        console.log(this.show);
        this.show = !this.show;
    }

}