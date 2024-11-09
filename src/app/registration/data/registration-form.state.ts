import {NewUser, RegistrationFormState, RegistrationResponse} from '../model';
import {tapResponse } from '@ngrx/operators';
import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {computed, inject} from '@angular/core';
import {AuthService} from './auth.service';
import {delay, pipe, switchMap, tap} from 'rxjs';
import {LoggerService} from '../../shared/monitoring/logger.service';
import {HttpErrorResponse} from '@angular/common/http';

const initialState: RegistrationFormState = {
    user: {
        username: '',
        password: '',
        email: '',
        fullName : ''
    },
    isLoading: false,
    response: {
        status: undefined,
        message: '',
    },
}

export const RegistrationFormStore = signalStore(
    withState(initialState),
    withComputed(({ response }) => ({
        isError: computed(() => response ? response().status === 'error' : false),
        isSuccess: computed(() => response ? response().status === 'success' : false),
    })),
    withMethods((store, authService = inject(AuthService), loggerService = inject(LoggerService)) => ({
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
                delay(1000), // left it here to make spinner visible
                switchMap((user: NewUser) =>
                    authService.register(user).pipe(
                        tap(() => patchState(store, { isLoading: false })),
                        tapResponse({
                            next: (response: RegistrationResponse) => patchState(store, { response }),
                            error: (response: HttpErrorResponse) => {
                                loggerService.error(response);
                                patchState(store, {
                                    response: response.error ? response.error : {
                                        status: 'error',
                                        message: 'An unexpected error occurred'
                                    },
                                    isLoading: false
                                });
                            },
                            complete: () => patchState(store, { isLoading: false }),
                        })
                    )
                ),
            )
        ),
        cleanup(): void {
            patchState(store, (state) => (initialState))
        },
    }))
)
