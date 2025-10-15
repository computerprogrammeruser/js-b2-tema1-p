import { converter } from '../u5/u5e1.js';

describe('Closures IIFE', () => {

    test('Failed Conversions...', () => {

        expect(converter(55)).toBe(false);
        expect(converter(['55'])).toBe(false);
        expect(converter(new Date())).toBe(false);
        expect(converter(new Object())).toBe(false);
        expect(converter(function(){})).toBe(false);
    });

    test('Successfue Conversions...', () => {

        expect(converter('Hola!')).toBe('h4l1!');
        expect(converter('Cigüeña')).toBe('c3g52ñ1');
        expect(converter('CaMióN')).toBe('c1m34n');
    });

});
