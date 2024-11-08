import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {RegistrationResponse} from '../model';
import {environment} from '../../../environments/environment';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {provideHttpClient} from '@angular/common/http';
import {mockUser} from '../utils/mocks';

describe('AuthServiceService', () => {
    let service: AuthService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AuthService,
                provideHttpClient(),
                provideHttpClientTesting(),
            ],
        });
        service = TestBed.inject(AuthService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('register', () => {
        it('should return an Observable<RegistrationResponse>', () => {
            const mockResponse: RegistrationResponse = {
                status: 'success',
                message: 'Registration data received successfully',
            };

            service.register(mockUser).subscribe((response) => {
                expect(response).toEqual(mockResponse);
            });

            const req = httpMock.expectOne(`${environment.API_BASE_URL}/register`);
            expect(req.request.method).toBe('POST');
            expect(req.request.body).toEqual(mockUser);

            req.flush(mockResponse);
        });
    });
});
