import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    parentProp;

    constructor() {
        super(); // calls the super class constructor i.e. LightningElement
        // alert('Inside Parent Constructor');
        this.parentProp = 234;
        //  alert('Inside Parent Constructor : Value of parentProp ' + this.parentProp);


    }

    connectedCallback() {
        // alert('Inside Parent connectedCallback : Value of parentProp ' + this.parentProp);

    }

    disconnectedCallback() {
        // alert("You are disconnecting from Parent");
    }
}