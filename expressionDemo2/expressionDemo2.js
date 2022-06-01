import { LightningElement, track } from 'lwc';

export default class ExpressionDemo2 extends LightningElement {
    firstName = '';
    lastName = '';



    get fullName() {
        console.log('firstName ' + this.firstName + ' lastName ' + this.lastName);
        return this.firstName + ' ' + this.lastName + 'iier';

    }


    // two way binding
    handleChange(event) {
        // alert('change event is genrated by' + event.target.name);
        // alert('target value ' + event.target.value);

        let eventTarget = event.target.name;

        if (eventTarget === 'firstName') {
            this.firstName = event.target.value;
        } else {
            this.lastName = event.target.value;
        }
    }

    handleClick(event) {
        console.log('Button is clicked');

        this.firstName = event.target.firstName.value;
        this.lastName = event.target.lastName.value;
        this.fullName = this.firstName + this.lastName;
        console.log(this.fullName);

        console.log('firstName ' + this.firstName + ' lastName ' + this.lastName);


    }



}