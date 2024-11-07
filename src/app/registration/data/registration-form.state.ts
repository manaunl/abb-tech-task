import {NewUser, RegistrationFormState, RegistrationResponse} from '../model';
import {tapResponse } from '@ngrx/operators';
import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {computed, inject} from '@angular/core';
import {AuthService} from './auth.service';
import {delay, pipe, switchMap, tap} from 'rxjs';

const initialState: RegistrationFormState = {
    user: {
        username: '',
        password: ''
    },
    isLoading: false,
    response: undefined,
}

export const RegistrationFormStore = signalStore(
    withState(initialState),
    withComputed(({ user }) => ({
        isValid: computed(() => user().username !== '' && user().password !== ''),
    })),
    withMethods((store, authService = inject(AuthService)) => ({
        updateUser(updates: Partial<NewUser>): void {
            patchState(store, (state) => ({
                ...state,
                user: {
                    ...state.user,
                    ...updates
                }
            }))
        },
        register: rxMethod<NewUser>(
            pipe(
                tap(() => patchState(store, { isLoading: true })),
                // delay(5000),
                switchMap((user: NewUser) => {
                    return authService.register(user);
                }),
                tapResponse({
                    next: (response: RegistrationResponse) => patchState(store, { response }),
                    error: console.error,
                    finalize: () => patchState(store, { isLoading: false }),
                })
            )
        ),
    }))
)
