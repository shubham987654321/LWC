import { api, LightningElement } from 'lwc';

export default class RecordFormDemo extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = ['Name', 'Title', 'Email', 'Phone', 'FistName'];
}