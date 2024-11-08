import {NewUser} from './new-user.model';
import {RegistrationResponse} from './registration-response.model';

export interface RegistrationFormState {
    user: NewUser;
    isLoading: boolean;
    isError: boolean;
    response: RegistrationResponse | undefined;
}
