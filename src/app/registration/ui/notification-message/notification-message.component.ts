import {Component, input} from '@angular/core';
import {status} from '../../model/status.type';
import {NgClass} from '@angular/common';

@Component({
  selector: 'abb-notification-message',
  standalone: true,
    imports: [
        NgClass
    ],
  templateUrl: './notification-message.component.html',
  styleUrl: './notification-message.component.scss'
})
export class NotificationMessageComponent {
    readonly status = input.required<status>();
    readonly message = input.required<string>();
}
