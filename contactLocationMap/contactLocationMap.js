import { api, LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import FIELD_MAILING_CITY from '@salesforce/schema/Contact.MailingCity';
import FIELD_MAILING_COUNTRY from '@salesforce/schema/Contact.MailingCountry';


const FIELDS = [FIELD_MAILING_CITY, FIELD_MAILING_COUNTRY];

export default class ContactLocationMap extends LightningElement {
    mapMarkers;

    @api recordId;


    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredGetRecord({ data, error }) {
        if (data) {
            let mailingCity = data.fields.MailingCity.value; // MailingCity == Api name
            let mailingCountry = data.fields.MailingCountry.value;
            this.mapMarkers = [{
                location: {
                    City: mailingCity,
                    Country: mailingCountry
                },
                title: mailingCity + '=' + mailingCountry
            }]
        }
    }

}