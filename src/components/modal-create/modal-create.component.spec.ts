import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { ModalCreateComponent } from './modal-create.component';
import { ModalCreateService } from './modal-create.service';

describe('Validate authentication service', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModalCreateComponent],
        }).compileComponents();
    }));

    it('Validate payment service', inject([ModalCreateService], (service: ModalCreateService) => {
        expect(
            service.sendPayment(1002, {
                value: '33.30',
                card: {
                    card_number: '1111111111111111',
                    cvv: 444,
                    expiry_date: '01/18',
                },
            })
        ).toBeTruthy();
    }));

    it('Validate payment service that does not pass', inject([ModalCreateService], (service: ModalCreateService) => {
        expect(
            service.sendPayment(1001, {
                value: '33.33',
                card: {
                    card_number: '4111111111111234',
                    cvv: 333,
                    expiry_date: '01/20',
                },
            })
        ).toBeFalsy();
    }));
});
