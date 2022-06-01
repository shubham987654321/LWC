import { api, LightningElement } from 'lwc';

export default class ContactTile extends LightningElement {
    @api contact;

    handleClick() {
        let titleEvent = new CustomEvent('tileevent', {
            detail: { contactId: this.contact.Id },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(titleEvent);
    }
}