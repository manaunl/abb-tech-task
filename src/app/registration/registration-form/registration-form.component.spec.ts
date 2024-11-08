import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RegistrationFormComponent} from './registration-form.component';
import {RegistrationFormStore} from '../data/registration-form.state';
import {signal} from '@angular/core';
import {RegistrationResponse} from '../model';
import {mockUser} from '../utils/mocks';

class MockRegistrationFormStore {
    user = {
        username: signal<string>(mockUser.username),
        password: signal<string>(mockUser.password),
        email: signal<string>(mockUser.email),
        fullName: signal<string>(mockUser.fullName),
    }
    isLoading = signal<boolean>(false);
    response = signal<RegistrationResponse>({
        status: undefined,
        message: '',
    });
    isError = signal<boolean>(false);
    isSuccess = signal<boolean>(false);
}

describe('RegistrationFormComponent', () => {
    let component: RegistrationFormComponent;
    let fixture: ComponentFixture<RegistrationFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RegistrationFormComponent]
        })
            .overrideComponent(RegistrationFormComponent, {
                add: {
                    providers: [{ provide: RegistrationFormStore, useClass: MockRegistrationFormStore }],
                },
            })
            .compileComponents();

        fixture = TestBed.createComponent(RegistrationFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('loading', () => {
       it('should display loader when isLoading is true', ()=> {
           component.store.isLoading
           fixture.detectChanges();
       });
    });
});
