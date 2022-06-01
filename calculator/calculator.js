import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    // member varible of class not local variable class
    firstNo = 0;
    secondNo = 0;
    result = 0;

    handleChange(event) {
        let eventTarget = event.target.name;
        if (eventTarget === 'fno') {
            this.firstNo = parseFloat(event.target.value);
        } else {
            this.secondNo = parseFloat(event.target.value);
        }
    }



    add() {
        this.result = 'Addition is... ' + ((this.firstNo) + (this.secondNo));

    }

    subtract() {
        this.result = 'Subtraction is... ' + (this.firstNo - this.secondNo);
    }
}