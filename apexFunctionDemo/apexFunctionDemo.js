import { track, LightningElement, wire } from 'lwc';
import getContact from '@salesforce/apex/ContactController.getContact';
export default class ApexFunctionDemo extends LightningElement {
    @track contacts = [];

    @wire(getContact)
    wiredGetContacts({ data, error }) {
        if (data) {
            // this.contacts = data;
            data.forEach(contact => {
                console.log(contact);
                this.contacts.push({
                    cid: contact.Id,
                    cname: contact.Name,
                    cemail: contact.Email,
                    ctitle: contact.Title,
                    cphone: contact.Phone
                });
            });
        }

    }
}