import {Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: "magazine",
    styleUrls: ["./magazine.component.css"],
    templateUrl: "./magazine.component.html"
})

export class Magazine {

    constructor(private formBuilder: FormBuilder) {
        this.createForm()
    }

    submitForm() {
        let requestData = {
            customerName: this.magazineForm.value.fullName,
            productCode: this.magazineForm.value.selectedEdition.editionCode,
            acceptPolicy: this.magazineForm.value.acceptPolicy,
            shipMode: this.magazineForm.value.selectedShipping
        }
        alert(JSON.stringify(requestData))
    }

    editions = [
        {editionCode: 1, editionName: "US", price: "10.99 USD"},
        {editionCode: 2, editionName: "Canada", price: "14.99 CAD"},
        {editionCode: 3, editionName: "International", price: "23.99 USD"},
    ]

    magazineForm: FormGroup

    createForm() {
        this.magazineForm = this.formBuilder.group({
            fullName: ['', Validators.required],
            selectedEdition: this.editions[0],
            selectedShipping: '',
            acceptPolicy: false
        })
    }
}