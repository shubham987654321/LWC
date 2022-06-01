import { api, LightningElement, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';


import FIELD_NAME from '@salesforce/schema/Contact.Name';
import FIELD_TITLE from '@salesforce/schema/Contact.Title';
import FIELD_EMAIL from '@salesforce/schema/Contact.Email';
import FIELD_PHONE from '@salesforce/schema/Contact.Phone';

//lightning/uiRecordApi
// Api : It is certain function which establish communication between two differnect device.



// const FIELDS = [
//     'Contact.Name', 'Contact.Title', 'Contact.Email', 'Contact.Phone'
// ];


const FIELDS = [FIELD_NAME, FIELD_TITLE, FIELD_EMAIL, FIELD_PHONE];




export default class GetRecordPropertyDemo extends LightningElement {


    @api recordId;




    // @wire(getRecord, { recordId: '0035j00000IPD1nAAH', fields: FIELDS })
    // contact;


    // $recordId is called Reactive variable
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    contact;






    get name() {
        return this.contact.data.fields.Name.value;
    }

    get title() {
        return this.contact.data.fields.Title.value;
    }

    get email() {
        return this.contact.data.fields.Email.value;
    }

    get phone() {
        return this.contact.data.fields.Phone.value;
    }



}