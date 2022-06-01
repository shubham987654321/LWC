import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

    products = ['lux', 'Pears', 'Dove', 'Lifebuoy'];

    // by default all the properties in a component are PRIVATE
    // (to make it public we use @api)

    // Never assign a value to PUBLIC property inside  the component 
    // it will br overwritten  by a value coming from parent
    @api childProperty = 560;

    // printChildPropertyValue is a public method and accessible to Parent
    @api
    printChildPropertyValue() {
        //alert('value of childProperty : ' + this.childProperty);

    }


    // child component genrating the event.

    handleClick() {
        // the nameEvent alyas in lowercae.
        //  let custEvent = new CustomEvent("childevent", { detail: 12345 });
        //let custEvent = new CustomEvent("childevent", { detail: { abc: 99332 } });
        let custEvent = new CustomEvent("childevent", { detail: { products: this.products }, bubbles: true, composed: true });
        this.dispatchEvent(custEvent);
    }





}