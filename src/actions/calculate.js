
export function addNumber(value) {
    return {
        type: 'ADD_NUMBER',
        value: value
    };
}

export function addOperator(value) {
    return {
        type: 'ADD_OPERATOR',
        value: value
    };
}

export function clear() {
    return {
        type: 'CLEAR'
    };
}

export function calculate() {
    return {
        type: 'CALCULATE'
    };
}
