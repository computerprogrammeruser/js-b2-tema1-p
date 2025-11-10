// T1. Uso avanzado de funciones
// U2. Métodos reduce y forEach
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

// import { act } from "react";

// Escribe aquí tu solución / escriviu aquí la vostra solució:
class ClassroomReport {

    #studentList;

    constructor(studentList) {
        this.#studentList = studentList || [];
    }

    get studentList() {
        return this.#studentList;
    }

    set studentList(studentList) {
        this.#studentList = studentList;
    }

    getStudentsNumber(excludeInactive = true) {
        return this.#studentList.reduce((accumulator, student) => {
            if (excludeInactive && !student.active) {
                return accumulator;
            }
            return accumulator + 1;
         }, 0);
    }

    averageScore(excludeInactive = true) {
        const result = this.#studentList.reduce((accumulator, student) => {
            if (excludeInactive && !student.active) {
                return accumulator;
            }
            accumulator.sum += student.score;
            accumulator.count ++;
            return accumulator;
        }, {sum: 0, count: 0});
        
        return result.count == 0 ? 0 : result.sum / result.count;
    }

    bestStudent(excludeInactive = true) {

        let bestOne = null;

        this.#studentList.forEach(student => {
            if(excludeInactive && !student.active) {
                return;
            }
            if (bestOne == null || student.score >= bestOne.score) {
                bestOne = student;
            }
        });
        return bestOne;
    }

    worstStudent(excludeInactive = true) {

        let worstOne = null;

        this.#studentList.forEach(student => {
            if(excludeInactive && !student.active) {
                return;
            }
            if (worstOne == null || student.score <= worstOne.score) {
                worstOne = student;
            }
        });
        return worstOne;   
    }

    passedCount(excludeInactive = true) {
        return this.#studentList.reduce((count, student) => {
            if(excludeInactive && !student.active) {
                return count;
            }
            return student.score >= 5 ? count + 1 : count;
        }, 0);
    }

    failedCount(excludeInactive = true) {
        return this.#studentList.reduce((count, student) => {
            if(excludeInactive && !student.active) {
                return count;
            }
            return student.score < 5 ? count + 1 : count;
        }, 0);
    }
}

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { ClassroomReport };
