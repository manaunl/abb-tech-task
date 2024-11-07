import {Routes} from '@angular/router';
import {RegistrationFormComponent} from './registration-form/registration-form.component';

export const routes: Routes = [
    {
        path: 'registration-form',
        component: RegistrationFormComponent
    },
    {
        path: '*',
        redirectTo: 'registration-form',
    }
];
