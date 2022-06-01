import { LightningElement, wire } from 'lwc';
import CONTACT_SELECTED_CHANNEL from '@salesforce/messageChannel/ContactsSelected__c';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import { getRecord, deleteRecord } from 'lightning/uiRecordApi';
import FIELD_NAME from '@salesforce/schema/Contact.Name';
import FIELD_TITLE from '@salesforce/schema/Contact.Title';
import FIELD_EMAIL from '@salesforce/schema/Contact.Email';
import FIELD_PHONE from '@salesforce/schema/Contact.Phone';
const FIELDS = [FIELD_NAME, FIELD_TITLE, FIELD_EMAIL, FIELD_PHONE];




import { NavigationMixin } from 'lightning/navigation';
// NavigationMixin class containg  static Navigate method

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// import Utility from 'c/utility';

import { showToast } from 'c/utility'


export default class ContactSubscriber extends NavigationMixin(LightningElement) {

    selectedContactId;
    subscription;

    @wire(MessageContext)
    context; // this property hold data about ContactPublisher 


    // as a selected contact Id is changed getRecord will called  
    @wire(getRecord, {
        recordId: '$selectedContactId',
        fields: FIELDS
    })

    contact; // contact.data refers to an object

    // life cycle method It  is  called  when the DOM of component and attached to main DOM 
    connectedCallback() {
        this.subscribeToMessageChannel();

    }

    subscribeToMessageChannel() {

        this.subscription = subscribe(this.context, CONTACT_SELECTED_CHANNEL,
            (recievedMessage) => {
                this.handleMessage(recievedMessage);
            });
    }

    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    handleMessage(message) {
        // alert('ContactSubscribrer says : published Message Recived....');
        // alert('ContactSubscribrer says : selected Contact Id  is : ' + message.contactRecordId);
        this.selectedContactId = message.contactRecordId;

    }

    get name() {
        console.log('nmae is called' + this.contact.data.fields.Name.Value);
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



    // edit the contact record
    handleEdit() {
        let pageReference = {
            type: 'standard__recordPage',
            attributes: {
                recordId: this.selectedContactId,
                objectApiName: 'Contact',
                actionName: 'edit'
            }

        };
        this[NavigationMixin.Navigate](pageReference);

    }


    // delete Record method
    handleDeleteClick() {
        deleteRecord(this.selectedContactId)
            .then(() => {
                // alert('Record get Successfull deleted');

                // using tost method to display alert
                /*  let displayToast = new ShowToastEvent({
                     title: 'DELETE RECORD',
                     "message": "The record has been deleted successfully.",
                     variant: 'success',
                     mode: 'pester' // it indicates  in what point/time toast notification will apeared(dismissble/pester/sticky')
                 });

                 this.dispatchEvent(displayToast); */

                // Utility.showToast(this, 'DELETE RECORD', 'Record deleted Sucessfully!!!', 'success', 'pester');

                showToast(this, 'DELETE RECORD', 'Record deleted Sucessfully!!!', 'success', 'pester');



            })
            .catch(() => {
                // alert('Record deletion Unscucessfull')
                /*       let displayToast = new ShowToastEvent({
                          title: 'DELETE RECORD',
                          "message": "Unsuccessfull",
                          variant: 'error',
                          mode: 'pester' // it indicates  in what point/time toast notification will apeared(dismissble/pester/sticky')
                      });

                      this.dispatchEvent(displayToast); */

                // Utility.showToast(this, 'DELETE RECORD', 'Record deleted Sucessfully!!!', 'error', 'pester');
                showToast(this, 'DELETE RECORD', 'Unsuccessfull !!!', 'error', 'sticky');
            })

    }


}