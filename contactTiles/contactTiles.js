import { api, LightningElement } from 'lwc';

export default class ContactTiles extends LightningElement {

    // contactTile is child os contactPublisher
    @api contacts; // List of contact Object


    handleTileEvent(tileEventRef) {
        // alert('ContactTiles say : tileEvent Received from ContactTile');
        // alert('ContactTiles say : Selected Contact Id is ...' + tileEventRef.detail.contactId);

    }
}