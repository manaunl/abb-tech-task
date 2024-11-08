import {ChangeDetectionStrategy, Component, ElementRef, inject, signal, viewChild, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {JsonPipe, NgIf} from '@angular/common';
import {RegistrationFormStore} from '../data/registration-form.state';
import {NewUser} from '../model';
import {HttpClient} from '@angular/common/http';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {CustomInputComponent} from '../ui/custom-input/custom-input.component';

@Component({
    selector: 'abb-registration-form',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        FormsModule,
        NgIf,
        JsonPipe,
        LoaderComponent,
        CustomInputComponent,
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
