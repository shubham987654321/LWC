import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContact';

export default class DataTableDemo extends LightningElement {
    @wire(getContacts)
    contacts;

    columns = [
        { label: 'Contact Name', fieldName: 'Name', editable: true },
        { label: 'Title', fieldName: 'Title', editable: true },
        { label: 'Email', fieldName: 'Email', editable: true },
        { label: 'Phone', fieldName: 'Phone' },
    ];

}