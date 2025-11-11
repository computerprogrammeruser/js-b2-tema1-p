// T1. Uso avanzado de funciones
// U5. Closures
// Enunciado disponible en u5e1.md / Enunciat disponible a u5e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

const converter = (function() {
    function generate(text) {
        
        if (typeof text != 'string') {
            return false;
        } else {
            const digitsAndVowels = { 'a': '1', 'á': '1', 'e': '2', 'é': '2', 'i': '3', 'í': '3', 'o': '4', 'ó': '4', 'u': '5', 'ú': '5', 'ü': '5' };
            let textArray = text.toLowerCase().split('');
            const convertedText = textArray.map(character => digitsAndVowels[character] || character);
            return convertedText.join('');
        }
    }
    return generate;
})();


/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { converter };
