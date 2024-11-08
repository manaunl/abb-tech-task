import {NewUser, RegistrationResponse} from '../model';

export const mockUser: NewUser = {
    username: 'myuser',
    password: 'Password123!',
    email: 'user@example.com',
    fullName: '',
};

export const mockSuccessResponse: RegistrationResponse = {
    status: 'success',
    message: 'Registration data received successfully',
};

export const mockErrorResponse: RegistrationResponse = {
    status: 'error',
    message: 'Username, password and email are required',
};
