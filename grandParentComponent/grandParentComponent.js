import { LightningElement } from 'lwc';

export default class GrandParentComponent extends LightningElement {
    handleChildEvent(event) {
        console.log('handelChildEvent is called');

        alert("Grand Parent Component says :  childEvent Recieved  fom Child Component");
        alert('Grand ParentComponent says : Data recieved from childevent is ....' + event.detail.products);
    }
}