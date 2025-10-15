const GREET_TYPES = {
    HI: 'hi',
    BYE: 'bye'
}

function sayHi(name) {
    return encryptedGreeting(name, GREET_TYPES.HI);
}

function sayBye(name) {
    return encryptedGreeting(name, GREET_TYPES.BYE);
}

function encryptedGreeting(name, type) {

    if (type === GREET_TYPES.HI) {
        return basicEncrypt('Hi ' + name + '!');
    }

    return basicEncrypt('Bye ' + name + '!');
}
