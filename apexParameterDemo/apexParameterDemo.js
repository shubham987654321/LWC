import getContactsByMailingCountry from '@salesforce/apex/ContactController.getContactsByMailingCountry';
import { wire, LightningElement } from 'lwc';

export default class ApexParameterDemo extends LightningElement {

    mailingCountry;

    @wire(getContactsByMailingCountry, { mailingCountry: "$mailingCountry" })
    contacts;

    handelChange(event) {
        this.mailingCountry = event.target.value;
    }
}