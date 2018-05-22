import {Component} from '@angular/core';

@Component({
    selector: "magazine",
    styleUrls: ["./magazine.component.css"],
    templateUrl: "./magazine.component.html"
})

export class Magazine {
    submitForm() {
        let requestData = {
            customerName: this.fullName,
            productCode: this.selectedEdition.editionCode,
            acceptPolicy: this.acceptPolicy,
            shipMode: this.selectedShipping
        }
        alert(JSON.stringify(requestData))
    }

    fullName = ""
    editions = [
        {editionCode: 1, editionName: "US", price: "10.99 USD"},
        {editionCode: 2, editionName: "Canada", price: "14.99 CAD"},
        {editionCode: 3, editionName: "International", price: "23.99 USD"},
    ]

    selectedEdition = this.editions[0] 
    selectedShipping = ""
    acceptPolicy = false;
}