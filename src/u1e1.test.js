import { conditionalCallback }  from '../u1/u1e1.js';

describe('Callbacks', () => {

    test('Callback properly executed...', done => {
        const callbackFn = (param) => {
            expect(param).toBe(true);
            done();
        };

        const result = conditionalCallback(callbackFn, true);
        expect(result).toBe(true);
    });

    test('Not param passed...', done => {
        const callbackFn = jest.fn();

        const result = conditionalCallback(callbackFn);
        expect(callbackFn).not.toHaveBeenCalled();
        expect(result).toBe(false);
        done();
    });

    test('Param with falsy value...', done => {
        const callbackFn = jest.fn();

        const result = conditionalCallback(callbackFn, 0);
        expect(callbackFn).not.toHaveBeenCalled();
        expect(result).toBe(false);
        done();
    });

});
