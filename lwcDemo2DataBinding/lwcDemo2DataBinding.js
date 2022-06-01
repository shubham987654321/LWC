import { track, LightningElement } from 'lwc';

export default class LwcDemo2DataBinding extends LightningElement {
    greeting = 'Welcome to MTX Salesforce Trainings';

    firstName = '';
    lastName = '';
    @track fullName = { fname: '', lname: '' };


    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }


    handleNameChange(event) {
        var field = event.target.name;
        if (field === 'firstname') {
            this.firstName = event.target.value;
        }
        if (field === 'lastname') {
            this.lastName = event.target.value;
        }
        // this.fullName = { fname: this.firstName, lname: this.lastName };
        this.fullName.fname = this.firstName;
        this.fullName.lname = this.lastName;
    }

    handelClick(event) {

        alert(this.firstName + '$$$$$$$' + this.firstName + '@@@@@@@@@@@@@@' + this.lastName);
        alert(this.fullName.fname + '------------' + this.firstName + '#########' + this.fullName.lname);
    }




}