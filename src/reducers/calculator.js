import { List, Stack } from 'immutable';

const initialState = {
    stack: Stack(),
    result: 0,
    lastType: null // null, NUM, OPR
};

function infixToRPN(stack) {
    // Dijkstra Shunting-yard
    var operators = Stack(),
        output = List(),
        precedence = {
            'ADD': 2,
            'SUB': 2,
            'DIV': 3,
            'MUL': 3
        };

    stack.forEach((input) => {
        if (typeof input === 'number') {
            output = output.push(input);
            return;
        }

        if (operators.size) {
            if (precedence[input] <= precedence[operators.first()]) {
                output = output.concat(operators);
                operators = Stack();
            }
        }
        operators = operators.push(input);
    });

    if (operators.size) {
        output = output.concat(operators);
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

    inStack.forEach((input) => {
        if (typeof input === 'number') {
            stack.push(input);
            return;
        }

        if (stack.length < 2) {
            throw new Error('Not enough operands');
        }

        val2 = stack.pop();
        val1 = stack.pop();
        stack.push(operations[input](val1, val2));
    });

    return stack[0];
}

const calculator = (state=initialState, action) => {
    var stack, value;
    switch(action.type) {
        case 'ADD_NUMBER':
            stack = state.stack;

            if (typeof stack.first() === 'number') {
                value = parseInt(`${ stack.first() }${ action.value }`, 10);
                stack = stack.pop().push(value);
            } else {
                stack = stack.push(action.value);
            }

            return {
                stack: stack,
                result: value
            };
        case 'ADD_OPERATOR':
            stack = state.stack;

            if (typeof stack.first() !== 'number') {
                // Don't allow multiple operators
                // FIXME: Allow for `**`.
                return state;
            }

            return Object.assign(state, {
                stack: stack.push(action.value)
            });
        case 'CLEAR':
            return initialState;
        case 'CALCULATE':
            if (state.stack.size < 3) {
                return state;
            }

            value = calculate(infixToRPN(state.stack.reverse()));

            return {
                stack: Stack([value]),
                result: value
            };
        default:
            return state;
    }
};

export default calculator;
export {
    infixToRPN,
    calculate
};
