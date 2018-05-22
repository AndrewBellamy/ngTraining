import {Component, Input} from '@angular/core';
import {FancyText} from '../fancyText/fancyText.component';
import {FancyCheckbox} from '../fancyCheckbox/fancyCheckbox.component';

@Component({
    selector: 'subscription-form',
    styleUrls: ['./subscriptionForm.component.css'],
    templateUrl: './subscriptionForm.component.html'
})

export class SubscriptionForm {
    @Input() interests: [string]
}