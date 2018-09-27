import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddlersComponent } from './paddlers.component';
import { PaddlerDetailComponent } from '../paddler-detail/paddler-detail.component';
import { PaddlerService } from '../../services/paddler.service';
import { Paddler } from '../../models/paddler';


describe('PaddlersComponent class', () => {
    let paddlersComponent: PaddlersComponent;
    let fixture: ComponentFixture<PaddlersComponent>;
    const mockedPaddlersInDB = [
        new Paddler('Benson', 'Ly', 185, 'both', 'UCSD'),
        new Paddler('Bob', 'Smith', 333, 'left', 'a team')
    ];
    const PaddlerServiceMock = {
        getPaddlers() {
            return {
                subscribe(callback: Function) {
                    callback(mockedPaddlersInDB);
                }
            };
        }
    };
    let expectedPaddlerList;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PaddlersComponent,
                PaddlerDetailComponent
            ],
            providers: [
                { provide: PaddlerService, useValue: PaddlerServiceMock }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaddlersComponent);
        paddlersComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('onSelect()', () => {
        it('should set selectedPaddler to be the paddler passed into onSelect when selectedPaddler is undefined', () => {
            expect(paddlersComponent.selectedPaddler).toBeUndefined();
            const expectedPaddler = new Paddler(
                'Benson',
                'Ly',
                180,
                'right',
                'UCSD'
            );

            paddlersComponent.onSelect(expectedPaddler);

            expect(paddlersComponent.selectedPaddler).toEqual(expectedPaddler);
        });

        it('should set selectedPaddler to be the paddler passed into onSelect when selectedPaddler is defined', () => {
            const somePaddler = new Paddler(
                'Initial',
                'Test',
                10,
                'both',
                'Cal'
            );
            paddlersComponent.selectedPaddler = somePaddler;
            expect(paddlersComponent.selectedPaddler).toEqual(somePaddler);
            const expectedPaddler = new Paddler(
                'Benson',
                'Ly',
                180,
                'right',
                'UCSD'
            );

            paddlersComponent.onSelect(expectedPaddler);

            expect(paddlersComponent.selectedPaddler).toEqual(expectedPaddler);
        });
    });

    describe('getPaddlers()', () => {
        it('should update paddlers array', () => {
            expect(paddlersComponent.paddlers).toEqual(mockedPaddlersInDB);
            const paddlerToInsert = new Paddler('Sample', 'Paddler', 0, 'side', 'team');
            expectedPaddlerList = [
                new Paddler('Benson', 'Ly', 185, 'both', 'UCSD'),
                new Paddler('Bob', 'Smith', 333, 'left', 'a team'),
                paddlerToInsert
            ];
            mockedPaddlersInDB.push(paddlerToInsert);

            paddlersComponent.getPaddlers();

            expect(paddlersComponent.paddlers).toEqual(expectedPaddlerList);
        });
    });
});
