import { api, LightningElement, track } from 'lwc';
import contactList from '@salesforce/apex/getContactList.contactList';

const columns = [
    { label: "Name", fieldName: "Name" },
    { label: "Title", fieldName: "Title" },
    { label: "Action", type: "button", typeAttributes: { label: "Show", name: "show", variant: "brand" } },
]

export default class DataTableWithRowSelection extends LightningElement {
    columns = columns;
    data = [];
    @api recordId; //will store current recordID
    @track seachKey = '';
    @track showTable = false;

    //calling apex class for contact list
    async connectedCallback() {
        // console.log(this.recordId);
        // console.log(this.seachKey);
        this.data = await contactList({ lwcRecordId: this.recordId, searchKey: this.seachKey });
        // console.log("MyData:",this.data);
        this.showTable = (this.data.length > 0) ? true : false;
        // console.log(this.showTable);
    }
    async handleSearch(event) {
        this.seachKey = event.target.value;
        // console.log(this.seachKey);
        this.data = await contactList({ lwcRecordId: this.recordId, searchKey: this.seachKey });
        this.showTable = (this.data.length > 0) ? true : false;
    }

    handleThisRow(event){
        const row = JSON.stringify(event.detail.selectedRows);
        window.alert(row);
    }
    handleRowActtion(event){
        // window.alert("Button Work");
        const row = JSON.stringify(event.detail.selectedRows);
        window.alert(row);
        console.log(event.detail);
    }

}