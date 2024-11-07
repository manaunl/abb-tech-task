import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {JsonPipe, NgIf} from '@angular/common';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-registration-form',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        FormsModule,
        NgIf,
        JsonPipe
    ],
    templateUrl: './registration-form.component.html',
    styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
    username = signal('');

    constructor() {
        console.log(environment.API_BASE_URL);
    }

    // usernameNgModel = viewChild<ElementRef>('usernameNgModel')
    //
    // isValid = computed<boolean|null>(() => {
    //     console.log(this.usernameNgModel());
    //
    //     return (this.usernameNgModel()?.nativeElement as NgModel)?.invalid;
    // })
    // username = signal<string>('');
    // password = signal<string>('');
    // email = signal<string>('');
    // fullName = signal<string>('');
}
