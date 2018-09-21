import { TestBed, inject } from '@angular/core/testing';

import { PaddlerService } from './paddler.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { MessageService } from './message.service';
const AngularFireDatabaseSpy = jasmine.createSpyObj('AngularFireDatabase', ['list']);
const MessageServiceSpy = jasmine.createSpyObj('MessageService', ['add']);

describe('PaddlerService gets and adds paddlers correctly to and from Firebase', () => {
    let database;
    let expectedMessage;
    let expectedValue;
    let actualValue;
    let paddlerService;
    let databaseListReturnSpy;
    const tableName = 'Paddlers';
    const valueChangesMockOutput = ['testing'];
    const pushMockOutput = {
        then(callback: Function) {
            callback();
        }
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PaddlerService,
                { provide: AngularFireDatabase, useValue: AngularFireDatabaseSpy },
                { provide: MessageService, useValue: MessageServiceSpy }
            ]
        });
        database = TestBed.get(AngularFireDatabase);
        databaseListReturnSpy = jasmine.createSpyObj([ 'valueChanges', 'push' ]);
        databaseListReturnSpy.valueChanges.and.returnValue(valueChangesMockOutput);
        databaseListReturnSpy.push.and.returnValue(pushMockOutput);
        database.list.and.returnValue(databaseListReturnSpy);
        paddlerService = TestBed.get(PaddlerService);
    });

    describe('getPaddlers()', () => {
        it('should output an array from the database and add a message to display', () => {
            expectedValue = ['testing'];
            expectedMessage = 'PaddlerService: fetched paddler';

            actualValue = paddlerService.getPaddlers();

            expect(database.list).toHaveBeenCalledWith(tableName);
            expect(databaseListReturnSpy.valueChanges.calls.count()).toEqual(1, 'valueChanges was not called once');
            expect(actualValue).toEqual(expectedValue);
            expect(MessageServiceSpy.add).toHaveBeenCalledWith(expectedMessage);
        });
    });

    describe('addPaddler()', () => {
        it('should call database.list().push() with the correct arguments and add the correct message to display', () => {
            const pushedObj = {};
            const databaseListPushThenSpy = spyOn(pushMockOutput, 'then');

            paddlerService.addPaddler(pushedObj);

            expect(database.list).toHaveBeenCalledWith(tableName);
            expect(databaseListReturnSpy.push).toHaveBeenCalledWith(pushedObj);
            expect(databaseListPushThenSpy.calls.count()).toBe(1);
        });
    });
});
