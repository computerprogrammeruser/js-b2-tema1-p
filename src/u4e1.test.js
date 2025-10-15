import { countDown } from '../u4/u4e1.js';

describe('Testing promises: countDown', () => {

    const STEPS = 6;

    test('countDown invalid callback...', async () => {

        try {
            const res = await countDown(STEPS);
        } catch (error) {
            expect(error.message).toMatch(/ERROR/);
        }

    });

    test('countDown invalid amount...', async () => {

        const callbackFunc = (step) => {
            console.log(step);
        };

        try {
            const res = await countDown(0, callbackFunc);
        } catch (error) {
            expect(error.message).toMatch(/ERROR/);
        }

    });

    test('countDown positive...', async () => {

        let c = STEPS;

        const stepFunc = (step) => {
            c--;
            expect(c).toBe(step);
        };

        const res = await countDown(STEPS, stepFunc);

        expect(c).toBe(0);
        expect(res).toBe(true);

    });

});
