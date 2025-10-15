import { STUDENT_LIST } from '../__mocks__/students.js';
import { ClassroomReport }  from '../u2/u2e1.js';

describe('ClassroomReport', () => {

    const cr = new ClassroomReport([]);

    test('Classroom student list management...', () => {

        expect(cr.getStudentsNumber()).toBe(0);

        cr.studentList = STUDENT_LIST;

        expect(cr.getStudentsNumber()).toBe(12);
        expect(cr.getStudentsNumber(false)).toBe(15);
        expect(cr.studentList).toBe(STUDENT_LIST);
    });

    test('Classroom averages...', () => {

        expect(cr.averageScore()).toBe(5.75);
        expect(cr.averageScore(false)).toBe(6.13);
    });

    test('Classroom passed / failed count...', () => {

        expect(cr.passedCount()).toBe(8);
        expect(cr.passedCount(false)).toBe(11);
        expect(cr.failedCount()).toBe(4);
        expect(cr.failedCount(false)).toBe(4);
    });

    test('Classroom best / worst student...', () => {

        expect(cr.bestStudent().id).toBe(13);
        expect(cr.bestStudent(false).id).toBe(14);
        expect(cr.worstStudent().id).toBe(15);
        expect(cr.worstStudent(false).id).toBe(15);
    });

});
