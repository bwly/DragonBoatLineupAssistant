import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaddlerComponent } from './add-paddler.component';
import { FormsModule } from '@angular/forms';
import { PaddlerService } from '../../services/paddler.service';
import { TeamService } from '../../services/team.service';
import { Paddler } from '../../models/paddler';
import { Team } from '../../models/team';
const paddlerServiceSpy = jasmine.createSpyObj('PaddlerService', ['addPaddler']);

describe('AddPaddlerComponent', () => {
    let addPaddlerComponent: AddPaddlerComponent;
    let fixture: ComponentFixture<AddPaddlerComponent>;
    let expectedValue;
    let actualValue;
    const mockedTeamsInDB = [
        new Team('UCSD'),
        new Team('Cal')
    ];
    const TeamServiceMock = {
        getTeams() {
            return {
                subscribe(callback: Function) {
                    callback(mockedTeamsInDB);
                }
            };
        }
    };
    let expectedTeamList;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddPaddlerComponent],
            imports: [FormsModule],
            providers: [
                { provide: PaddlerService, useValue: paddlerServiceSpy },
                { provide: TeamService, useValue: TeamServiceMock }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddPaddlerComponent);
        addPaddlerComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('onSubmit()', () => {
        it('should call paddlerService.addPaddler with correct parameters', () => {
            const newPaddler = new Paddler('Ben', 'Ly', 180, 'left', 'UCSD');
            addPaddlerComponent.model = newPaddler;
            expect(addPaddlerComponent.model).toEqual(newPaddler);

            addPaddlerComponent.onSubmit();

            expect(paddlerServiceSpy.addPaddler).toHaveBeenCalledWith(newPaddler);
        });
    });

    describe('sortTeamsByName()', () => {
        it('should output -1 when the first team comes before the second team, alphabetically', () => {
            const teamOne = new Team('AAAAAA');
            const teamTwo = new Team('BBBBBB');
            expectedValue = -1;

            actualValue = addPaddlerComponent.sortTeamsByName(teamOne, teamTwo);

            expect(actualValue).toEqual(expectedValue);
        });

        it('should output 1 when the first team comes after the second team, alphabetically', () => {
            const teamOne = new Team('BBBBBB');
            const teamTwo = new Team('AAAAAA');
            expectedValue = 1;

            actualValue = addPaddlerComponent.sortTeamsByName(teamOne, teamTwo);

            expect(actualValue).toEqual(expectedValue);
        });

        it('should output 0 when the two teams are the same', () => {
            const teamOne = new Team('AAAAAA');
            const teamTwo = new Team('AAAAAA');
            expectedValue = 0;

            actualValue = addPaddlerComponent.sortTeamsByName(teamOne, teamTwo);

            expect(actualValue).toEqual(expectedValue);
        });

        it('should output -1 when the first team comes before the second team, but the first letter is the same', () => {
            const teamOne = new Team('AAAAAA');
            const teamTwo = new Team('ABBBBB');
            expectedValue = -1;

            actualValue = addPaddlerComponent.sortTeamsByName(teamOne, teamTwo);

            expect(actualValue).toEqual(expectedValue);
        });

        it('should output 1 when the first team comes after the second team, but the first letter is the same', () => {
            const teamOne = new Team('ABBBBB');
            const teamTwo = new Team('AAAAAA');
            expectedValue = 1;

            actualValue = addPaddlerComponent.sortTeamsByName(teamOne, teamTwo);

            expect(actualValue).toEqual(expectedValue);
        });

        it('should output -1 when the first team comes before the second team, and the first team is lower case', () => {
            const teamOne = new Team('aaaaaa');
            const teamTwo = new Team('BBBBBB');
            expectedValue = -1;

            actualValue = addPaddlerComponent.sortTeamsByName(teamOne, teamTwo);

            expect(actualValue).toEqual(expectedValue);
        });

        it('should output -1 when the first team comes before the second team, and the second team is lower case', () => {
            const teamOne = new Team('AAAAAA');
            const teamTwo = new Team('bbbbbb');
            expectedValue = -1;

            actualValue = addPaddlerComponent.sortTeamsByName(teamOne, teamTwo);

            expect(actualValue).toEqual(expectedValue);
        });

        it('should output 1 when the first team comes after the second team, and the first team is lower case', () => {
            const teamOne = new Team('bbbbbb');
            const teamTwo = new Team('AAAAAA');
            expectedValue = 1;

            actualValue = addPaddlerComponent.sortTeamsByName(teamOne, teamTwo);

            expect(actualValue).toEqual(expectedValue);
        });

        it('should output 1 when the first team comes after the second team, and the second team is lower case', () => {
            const teamOne = new Team('BBBBBB');
            const teamTwo = new Team('aaaaaa');
            expectedValue = 1;

            actualValue = addPaddlerComponent.sortTeamsByName(teamOne, teamTwo);

            expect(actualValue).toEqual(expectedValue);
        });

        it('should output 0 when the teams are the same, but the first team is lower case', () => {
            const teamOne = new Team('aaaaaa');
            const teamTwo = new Team('AAAAAA');
            expectedValue = 0;

            actualValue = addPaddlerComponent.sortTeamsByName(teamOne, teamTwo);

            expect(actualValue).toEqual(expectedValue);
        });

        it('should output 0 when the teams are the same, but the second team is lower case', () => {
            const teamOne = new Team('AAAAAA');
            const teamTwo = new Team('aaaaaa');
            expectedValue = 0;

            actualValue = addPaddlerComponent.sortTeamsByName(teamOne, teamTwo);

            expect(actualValue).toEqual(expectedValue);
        });
    });

    describe('getTeams()', () => {
        it('should update teams array', () => {
            expect(addPaddlerComponent.teams).toEqual(mockedTeamsInDB);
            const teamToInsert = new Team('David Racing Dragons');
            expectedTeamList = [
                new Team('Cal'),
                teamToInsert,
                new Team('UCSD')
            ];
            mockedTeamsInDB.push(teamToInsert);

            addPaddlerComponent.getTeams();

            expect(addPaddlerComponent.teams).toEqual(expectedTeamList);
        });
    });
});
