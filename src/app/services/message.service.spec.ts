import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService adds messages to the display and clears them', () => {
    let messageService;
    let expectedResult;
    let message;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MessageService]
        });
        messageService = TestBed.get(MessageService);
    });

    describe('add()', () => {
        it('should add a message to the private messages array when the array is initially empty', () => {
            expect(messageService).toEqual(jasmine.objectContaining({
                messages: []
            }));
            message = 'Sample message';
            expectedResult = {
                messages: [message]
            };

            messageService.add(message);

            expect(messageService).toEqual(jasmine.objectContaining(expectedResult));
        });

        it('should append a message to the private messages array when the array is initially not empty', () => {
            messageService.messages.push('something');
            expect(messageService).toEqual(jasmine.objectContaining({
                messages: ['something']
            }));
            message = 'Second sample message';
            expectedResult = {
                messages: [
                    'something',
                    message
                ]
            };

            messageService.add(message);

            expect(messageService).toEqual(jasmine.objectContaining(expectedResult));
        });
    });

    describe('clear()', () => {
        it('should keep an empty messages array if it is initially empty', () => {
            expect(messageService).toEqual(jasmine.objectContaining({
                messages: []
            }));
            expectedResult = {
                messages: []
            };

            messageService.clear();

            expect(messageService).toEqual(jasmine.objectContaining(expectedResult));
        });

        it('should make the messages array empty if it has stuff', () => {
            messageService.messages.push('something');
            expect(messageService).toEqual(jasmine.objectContaining({
                messages: ['something']
            }));
            expectedResult = {
                messages: []
            };

            messageService.clear();

            expect(messageService).toEqual(jasmine.objectContaining(expectedResult));
        });
    });
});
