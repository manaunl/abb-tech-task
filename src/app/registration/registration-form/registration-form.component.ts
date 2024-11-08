import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {JsonPipe, NgIf} from '@angular/common';
import {RegistrationFormStore} from '../data/registration-form.state';
import {NewUser} from '../model';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {NotificationMessageComponent} from '../ui/notification-message/notification-message.component';

@Component({
    selector: 'abb-registration-form',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        FormsModule,
        NgIf,
        JsonPipe,
        LoaderComponent,
        NotificationMessageComponent,
    ],
    providers: [
        RegistrationFormStore
    ],
    templateUrl: './registration-form.component.html',
    styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent {
    readonly store = inject(RegistrationFormStore);

    updateModel(property: Partial<NewUser>) {
        this.store.updateUser(property);
    }

    register(user: NewUser){
        this.store.register(user);
    }

    refresh(){
        this.store.cleanup();
    }
}
