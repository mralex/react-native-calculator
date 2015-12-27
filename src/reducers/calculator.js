import { createStore } from 'redux';

const initialState = {
    stack: [],
    result: 0,
    lastType: null // null, NUM, OPR
};

function infixToRPN(stack) {
    // Dijkstra Shunting-yard
    var operators = [],
        operands = [],
        precedence = {
            'ADD': 2,
            'SUB': 2,
            'DIV': 3,
            'MUL': 3
        };

    stack.forEach((input) => {
        if (typeof input === 'number') {
            operands.push(input);
            return;
        }

        operators.push(input);
    });

}

function calculate(stack) {
    var value = 0;
    var lval, rval;
    var operator = null;

    stack.forEach((input) => {
        if (typeof input === 'number') {
            if (operator) {
                rval
            }
            tmp += input;
            return;
        }
        // switch(input) {
        //     'MUL':
        //     'DIV':
        //     'ADD':
        //     'SUB':
        // }
    });

    return value;
}

const calculator = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_NUMBER':
            var stack = state.stack;

            return Object.assign(state, {
                stack: [action.value, ...stack]
            });
        case 'ADD_OPERATOR':
            var stack = state.stack;

            return Object.assign(state, {
                stack: [action.value, ...stack]
            });
        case 'CLEAR':
            return initialState;
        case 'CALCULATE':
            var value = calculate(state.stack);
            return {
                stack: [value],
                result: 0
            };
    }
};

const store = createStore(calculator);
export default store;
