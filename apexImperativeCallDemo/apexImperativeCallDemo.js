import { LightningElement, wire } from 'lwc';
import getContact from '@salesforce/apex/ContactController.getContact';

export default class ApexImperativeCallDemo extends LightningElement {

    contacts;
    error;
    // call the getContact 

    handleGetContacts() {
        console.log('handleGetContacts get called');
        getContact()
            .then(message => {
                this.contacts = message;
                console.log('Message' + message.data);
            }).catch(message => {
                this.error = error;
            }).finally(() => {
                console.log("Finally Called!");
            });





    }
}



/*

let action  = component.get('c.getContact');
action.setCallback(this,function(response){});

$A.enqueAction(action);  //  put our request/action  in queue


// promise object repersent the eventual completion(or failure) of an Async operation


*/