import { LightningElement, track, wire } from 'lwc';

export default class FirstLWC extends LightningElement {

    constructor(){
        console.log("Constructor Run, this is derived class so we need to call super()");
        super();
    }

    @track accountNo = '125456';
    textVisible = false;
    updateName(event){
        this.accountNo = event.target.value ? event.target.value : 'Buddy';
    }

    hanldeClick(event){
        console.log(this.accountNo);
    }

    clearAccField(){

    }
}