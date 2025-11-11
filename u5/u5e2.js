// T1. Uso avanzado de funciones
// U5. Closures
// Enunciado disponible en u5e2.md / Enunciat disponible a u5e2.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function numberArray(maxSize) {

    const ERROR_1 = 'ERROR_1';
    const ERROR_2 = 'ERROR_2';
    const ERROR_3 = 'ERROR_3';

    let _list;
    const _max = maxSize;

    function init(array) {

        if (initialized()) {
            return ERROR_1;
        }

        if (array.length >= _max) {
            return ERROR_2;
        }

        if (!_checkItems(array)) {
            return ERROR_3;
        }

        _list = array.slice();
        return true;
    }

    function initialized() {
        return _list != undefined;
    }

    function _checkItems(itemsArray) {
        const items = Array.isArray(itemsArray) ? itemsArray : [itemsArray];
        return items.every(item => typeof item == 'number');
    }

    function _addItem(number) {
        if (_list.length >= _max) {
            return false;
        } else {
            _list.push(number);
            return true;
        }
    }

    function _removeItem(number) {
        for (let i = 0; i < _list.length; i++) {
            if (_list[i] == number) {
                _list.splice(i, 1);
                break;
            }
        }
        return true;
    }

    function length() {
        return initialized() ? _list.length : null;
    }

    function getList() {
        return _list.slice();
    }

    function add(items) {

        const itemsArray = Array.isArray(items) ? items : [items];

        if (!_checkItems(itemsArray)) {
            return ERROR_3;
        }

        for (let i = 0; i < itemsArray.length; i++) {
            if (!_addItem(itemsArray[i])) {
                return false;
            }
        }

        return true;
    }

    function remove(items) {

        const itemsArray = Array.isArray(items) ? items : [items];

        if (!_checkItems(itemsArray)) {
            return ERROR_3;
        } else {
            itemsArray.forEach(item => {
                _removeItem(item);
            });
            return true;
        }
    }
    return {
        init: init,
        initialized: initialized,
        length: length,
        items: getList,
        add: add,
        remove: remove
    };
}


/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { numberArray };
