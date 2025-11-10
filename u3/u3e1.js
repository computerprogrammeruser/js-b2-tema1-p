// T1. Uso avanzado de funciones
// U3. Promesas
// Enunciado disponible en u3e1.md / Enunciat disponible a u3e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:

function getAJoke(callback) {
    return fetch('https://geek-jokes.sameerkumar.website/api?format=json')
            .then(response => response.json())
            .catch(error => {
                callback(error);
            });
}

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { getAJoke };
