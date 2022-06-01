import { ShowToastEvent } from 'lightning/platformShowToastEvent';



/* export default class Utility {
    static showToast(component, toastTitle, toastMessage, toastVariant, toastMode) {
        console.log('showToast function is called');
        let toastEvent = new ShowToastEvent({
            title: toastTitle,
            message: toastMessage,
            variant: toastVariant,
            mode: toastMode

        });
        component.dispatchEvent(toastEvent);

    }

} */

let showToast = (component, toastTitle, toastMessage, toastVariant, toastMode) => {
    console.log('showToast function is called');
    let toastEvent = new ShowToastEvent({
        title: toastTitle,
        message: toastMessage,
        variant: toastVariant,
        mode: toastMode

    });
    component.dispatchEvent(toastEvent);


}

export {
    showToast
}