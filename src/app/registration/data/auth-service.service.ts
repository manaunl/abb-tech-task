import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {RegistrationForm} from '../model/registration-form.model';

@Injectable({
    providedIn: 'root'
})
export class AuthServiceService {

    constructor(private http: HttpClient) {}

    register(registrationForm: RegistrationForm): Observable<any> {
        return this.http.post(`${environment.API_BASE_URL}/register`, registrationForm);
    }
}
