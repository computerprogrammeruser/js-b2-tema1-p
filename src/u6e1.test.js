import { GREET_TYPES } from '../u6/modules/greeting.js';
import { doGreet } from '../u6/u6e1.js';

describe('Module testing.', () => {

    test('Imported sayHi', async () => {

        const greet = doGreet('John', GREET_TYPES.HI);
        expect(greet).toBe('72 105 32 74 111 104 110 33');

    });

    test('Imported sayBye', async () => {

        const greet = doGreet('John', GREET_TYPES.BYE);
        expect(greet).toBe('66 121 101 32 74 111 104 110 33');

    });

});
