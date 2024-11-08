import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {NotificationMessageComponent} from './notification-message.component';
import {mockErrorResponse, mockSuccessResponse} from '../../utils/mocks';

describe('NotificationMessageComponent', () => {
    let component: NotificationMessageComponent;
    let fixture: ComponentFixture<NotificationMessageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NotificationMessageComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NotificationMessageComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('status', mockErrorResponse.status);
        fixture.componentRef.setInput('message', mockErrorResponse.message);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render span correctly with message', () => {
        expect(fixture.debugElement.nativeElement.innerText).toContain(mockErrorResponse.message);
    });

    it('should render span correctly with error class list', () => {
        const element = fixture.debugElement.query(
            By.css('span')
        ).nativeElement;
        const errorClassList = ['text-orange-800', 'bg-orange-50', 'ring-orange-600/20'];

        for (let errorClass of errorClassList) {
            expect(element.classList).toContain(errorClass);
        }
    });

    it('should render span correctly with success class list', () => {
        fixture.componentRef.setInput('status', mockSuccessResponse.status);
        fixture.detectChanges();

        const element = fixture.debugElement.query(
            By.css('span')
        ).nativeElement;
        const successClassList = ['text-indigo-800', 'bg-indigo-50', 'ring-indigo-600/20'];

        for (let successClass of successClassList) {
            expect(element.classList).toContain(successClass);
        }
    });
});
