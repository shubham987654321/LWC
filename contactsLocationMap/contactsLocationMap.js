import { api, LightningElement, track, wire } from 'lwc';
import getLoactions from '@salesforce/apex/ContactController.getLocations';

export default class ContactsLocationMap extends LightningElement {

    @api listView; // it decide our list to view or hidden

    @track mapMarkers = [];


    @wire(getLoactions)
    wiredGetLoactions({ data, error }) {
        this.mapMarkers = [];
        if (data) {
            data.forEach((contact) => {
                this.mapMarkers.push({
                    location: {
                        City: contact.MailingCity,
                        Country: contact.MalingCountry

                    },
                    title: contact.MailingCity + '::' + contact.MalingCountry
                });

            });


        }
    }




}