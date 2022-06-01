import { LightningElement, wire } from 'lwc';
import getContact from '@salesforce/apex/ContactController.getContact';

// MessageChannel
import CONTACT_SELECTED_CHANNEL from '@salesforce/messageChannel/ContactsSelected__c';
import { publish, MessageContext } from 'lightning/messageService';

export default class ContactPublisher extends LightningElement {

    @wire(getContact)
    contacts;


    @wire(MessageContext)
    context; // this property holds data about ContactPublisher which would like to publish the message 


    handleTileEvent(tileEventRef) {
        //alert('ContactTiles say : tileEvent Received from ContactTile');
        //alert('ContactTiles say : Selected Contact Id is ...' + tileEventRef.detail.contactId);

        // publish message logic
        let message = {
            contactRecordId: tileEventRef.detail.contactId
        }

        publish(this.context, CONTACT_SELECTED_CHANNEL, message);

    }
}