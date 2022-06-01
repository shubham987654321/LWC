import { LightningElement } from 'lwc';

export default class ParentComponet extends LightningElement {
    parentProperty = 123;


    handleClick() {


        let childObjRef = this.template.querySelector('c-child-component');
        // let childObjRef = this.div.querySelector('c-child-component');
        childObjRef.printChildPropertyValue();

    }


    handleChildEvent(event) {
        console.log('handelChildEvent is called');

        //alert("Parent Component says :  childEvent Recieved  fom Child Component");
        // alert('ParentComponent says : Data recieved from childevent is ....' + event.detail.products);
    }

}