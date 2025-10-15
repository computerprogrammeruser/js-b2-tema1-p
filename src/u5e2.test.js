import { numberArray } from '../u5/u5e2.js';

describe('Closures testing', () => {

    const myList = numberArray(8);

    test('Exposed methods', () => {

        expect(myList.init).not.toBe(undefined);
        expect(myList.initialized).not.toBe(undefined);
        expect(myList.length).not.toBe(undefined);
        expect(myList.items).not.toBe(undefined);
        expect(myList.add).not.toBe(undefined);
        expect(myList.remove).not.toBe(undefined);

        expect(myList.initialized()).toBe(false);
    });

    test('Initialization', () => {

        expect(myList.init([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toMatch(/ERROR_2/);
        expect(myList.initialized()).toBe(false);

        expect(myList.init([1, 2, 'a', 4, 5, 6])).toMatch(/ERROR_3/);
        expect(myList.initialized()).toBe(false);

        expect(myList.init([1, 2, 3])).toBe(true);
        expect(myList.initialized()).toBe(true);
        expect(JSON.stringify(myList.items())).toBe(JSON.stringify([1, 2, 3]));

        expect(myList.init([1, 2, 3, 4, 5, 6, 7])).toMatch(/ERROR_1/);
    });

    test('Length control', () => {
        expect(myList.length()).toBe(3);

        expect(myList.add(4)).toBe(true);
        expect(myList.length()).toBe(4);

        expect(myList.add([5, 'a', 7])).toMatch(/ERROR_3/);
        expect(myList.length()).toBe(4);

        expect(myList.add([5, 6, 7])).toBe(true);
        expect(myList.length()).toBe(7);

        expect(myList.add([8, 9, 10])).toBe(false);
        expect(myList.length()).toBe(8);

        expect(myList.remove(10)).toBe(true);
        expect(myList.length()).toBe(8);
        expect(myList.remove([9])).toBe(true);
        expect(myList.length()).toBe(8);
        expect(myList.remove([8])).toBe(true);
        expect(myList.length()).toBe(7);
    });

});
