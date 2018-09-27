import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamsComponent } from './add-teams.component';
import { FormsModule } from '@angular/forms';
import { TeamService } from '../../services/team.service';
const teamServiceSpy = jasmine.createSpyObj('TeamService', ['addTeam']);

describe('AddTeamsComponent', () => {
    let addTeamsComponent: AddTeamsComponent;
    let fixture: ComponentFixture<AddTeamsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddTeamsComponent],
            imports: [FormsModule],
            providers: [
                { provide: TeamService, useValue: teamServiceSpy }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddTeamsComponent);
        addTeamsComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('onSubmit()', () => {
        it('should pass the new inputted team to the teamService\'s addTeam method', () => {
            const teamNameInput = {name: 'Something'};
            addTeamsComponent.model = teamNameInput;
            expect(addTeamsComponent.model).toEqual(teamNameInput);

            addTeamsComponent.onSubmit();

            expect(teamServiceSpy.addTeam).toHaveBeenCalledWith(teamNameInput);
        });
    });
});
