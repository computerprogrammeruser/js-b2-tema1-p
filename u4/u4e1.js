// T1. Uso avanzado de funciones
// U4. Asincronía y await
// Enunciado disponible en u4e1.md / Enunciat disponible a u4e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

async function countDown(amount, stepCallback) {
    
    if(!stepCallback) {
        return "ERROR. És obligatori el pas d'un callback com a segon paràmetre."
    }
        
    if (amount <= 0) {
    return "ERROR. La quantitat ha de ser positiva i més gran que 0."
    }

    const step = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    for(let countDownValue = amount - 1; countDownValue >= 0; countDownValue--) {
        stepCallback(countDownValue);

        if(countDownValue > 0) {
            await step(100)
        }
    }
    return true;
}

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { countDown };
