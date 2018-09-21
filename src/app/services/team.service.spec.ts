import { TestBed, inject } from '@angular/core/testing';

import { TeamService } from './team.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { MessageService } from './message.service';
const AngularFireDatabaseSpy = jasmine.createSpyObj('AngularFireDatabase', ['list']);
const MessageServiceSpy = jasmine.createSpyObj('MessageService', ['add']);

describe('TeamService gets and adds teams correctly to and from Firebase', () => {
    let database;
    let expectedMessage;
    let expectedValue;
    let actualValue;
    let teamService;
    let databaseListReturnSpy;
    const tableName = 'Teams';
    const valueChangesMockOutput = ['testing'];
    const pushMockOutput = {
        then(callback: Function) {
            callback();
        }
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TeamService,
                { provide: AngularFireDatabase, useValue: AngularFireDatabaseSpy },
                { provide: MessageService, useValue: MessageServiceSpy }
            ]
        });
        database = TestBed.get(AngularFireDatabase);
        databaseListReturnSpy = jasmine.createSpyObj([ 'valueChanges', 'push' ]);
        databaseListReturnSpy.valueChanges.and.returnValue(valueChangesMockOutput);
        databaseListReturnSpy.push.and.returnValue(pushMockOutput);
        database.list.and.returnValue(databaseListReturnSpy);
        teamService = TestBed.get(TeamService);
        MessageServiceSpy.add.calls.reset();
    });

    describe('getTeams()', () => {
        it('should output an array from the database and add a message to display', () => {
            expectedValue = ['testing'];
            expectedMessage = 'TeamService: fetched team';

            actualValue = teamService.getTeams();

            expect(database.list).toHaveBeenCalledWith(tableName);
            expect(databaseListReturnSpy.valueChanges.calls.count()).toEqual(1, 'valueChanges was not called once');
            expect(actualValue).toEqual(expectedValue);
            expect(MessageServiceSpy.add).toHaveBeenCalledWith(expectedMessage);
        });
    });

    describe('addTeam()', () => {
        it('should call database.list().push() with the correct arguments and add the correct message to display', () => {
            const pushedObj = {};
            const databaseListPushThenSpy = spyOn(pushMockOutput, 'then').and.callThrough();
            expectedMessage = 'TeamService: team has been added';

            teamService.addTeam(pushedObj);

            expect(database.list).toHaveBeenCalledWith(tableName);
            expect(databaseListReturnSpy.push).toHaveBeenCalledWith(pushedObj);
            expect(databaseListPushThenSpy.calls.count()).toBe(1);
            expect(MessageServiceSpy.add).toHaveBeenCalledWith(expectedMessage);
        });
    });
});
