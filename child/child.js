import { api, LightningElement } from 'lwc';

export default class Child extends LightningElement {
    @api childProp;

    constructor() {
        super();
        //alert('Inside Child Constructor');
        this.childProp = 222;
        //alert('Inside child Constructor : Value of childProp ' + this.childProp);
    }

    // this will execute after dom will be created
    connectedCallback() {
        //    alert('Inside child connectedCallback : Value of childProp ' + this.childProp);
    }

    disconnectedCallback() {
        //   alert("You are disconnecting from Child");
    }
}