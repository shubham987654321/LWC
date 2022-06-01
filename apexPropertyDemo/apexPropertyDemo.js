import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContact';
export default class ApexPropertyDemo extends LightningElement {

    @wire(getContacts)
    contacts;

}