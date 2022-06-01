import { LightningElement } from 'lwc';
import { showToastEvent } from 'lightning/platformShowToastEvent';

export default class UtilityComponent {

    static showToast(component, toastTitle, toastMessage, toastVariant, toastMode) {

        let toastEvent = new showToast({
            title: toastTitle,
            message: toastMessage,
            variant: toastVariant,
            mode: toastMode

        });
        component.dispatchEvent(toastEvent);

    }

}