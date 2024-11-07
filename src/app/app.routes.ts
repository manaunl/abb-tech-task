import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/registration-form',
        pathMatch: 'full',
    },
    {
        path: 'registration-form',
        loadComponent: () =>
            import('./registration/registration-form/registration-form.component').then((c) => c.RegistrationFormComponent),
    },
];
