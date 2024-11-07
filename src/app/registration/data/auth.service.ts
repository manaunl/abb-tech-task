import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {NewUser, RegistrationResponse} from '../model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    #http = inject(HttpClient);

    register(user: NewUser): Observable<RegistrationResponse> {
        return this.#http.post<RegistrationResponse>(`${environment.API_BASE_URL}/register`, user);
    }
}
