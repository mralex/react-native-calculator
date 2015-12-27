import { createStore } from 'redux';

const initialState = {
    stack: [],
    result: 0,
    lastType: null // null, NUM, OPR
};

function infixToRPN(stack) {
    // Dijkstra Shunting-yard
    var operators = [],
        output = [],
        precedence = {
            'ADD': 2,
            'SUB': 2,
            'DIV': 3,
            'MUL': 3
        };

    stack.forEach((input) => {
        if (typeof input === 'number') {
            output.push(input);
            return;
        }

        operators.push(input);
    });

    if (operators.length) {
        output = [...output, ...operators];
    }

    return output;
}

function calculate(inStack) {
    var result = 0;
    var stack = [];
    var val1, val2;
    var operations = {
        'ADD': (a, b) => {
            return a + b;
        },
        'SUB': (a, b) => {
            return a - b;
        },
        'MUL': (a, b) => {
            return a * b;
        },
        'DIV': (a, b) => {
            return a / b;
        }
    };

    inStack.forEach((input, i) => {
        if (typeof input === 'number') {
            stack.push(input);
            return;
        }

        if (stack.length < 2) {
            // throw an error!
            // TODO: Test for this.
        }

        val2 = stack.pop();
        val1 = stack.pop();
        stack.push(operations[input](val1, val2));
    });

    return stack[0];
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
export {
    infixToRPN,
    calculate
};
