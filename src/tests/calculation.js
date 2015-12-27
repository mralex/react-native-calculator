import { Stack } from 'immutable';
import mocha from 'mocha';
import { expect } from 'chai';
import { infixToRPN, calculate } from '../reducers/calculator';

describe('infix to RPN conversion', function() {
    it('converts basic addition', function() {
        let stack = [1, 'ADD', 1];

        expect(infixToRPN(stack).toArray()).to.deep.equal([1, 1, 'ADD']);
    });

    it('converts "1 + 1 - 2" to "1 1 + 2 -"', function() {
        let stack = [1, 'ADD', 1, 'SUB', 2];

        expect(infixToRPN(stack).toArray()).to.deep.equal([1, 1, 'ADD', 2, 'SUB']);
    });

    it('converts "1 + 2 x 3 - 4" to "1 2 3 x + 4 -"', function() {
        let stack = [1, 'ADD', 2, 'MUL', 3, 'SUB', 4];

        expect(infixToRPN(stack).toArray()).to.deep.equal([1, 2, 3, 'MUL', 'ADD', 4, 'SUB']);
    });

});

describe('RPN calculation', function() {
    it('does basic addition', function() {
        let stack = [1, 1, 'ADD'];

        expect(calculate(stack)).to.equal(2);
    });
    it('does basic subtraction', function() {
        let stack = [1, 1, 'SUB'];

        expect(calculate(stack)).to.equal(0);
    });
    it('does basic multiplication', function() {
        let stack = [2, 2, 'MUL'];

        expect(calculate(stack)).to.equal(4);
    });
    it('does basic division', function() {
        let stack = [2, 2, 'DIV'];

        expect(calculate(stack)).to.equal(1);
    });

    it('does a full calculation', function() {
        let stack = [1, 2, 'ADD', 4, 'MUL', 5, 'ADD', 3, 'SUB'];

        expect(calculate(stack)).to.equal(14);
    });

    it('does a parenthetical calculation', function() {
        // "5 + ((1 + 2) × 4) − 3"
        let stack = [5, 1, 2, 'ADD', 4, 'MUL', 'ADD', 3, 'SUB'];

        expect(calculate(stack)).to.equal(14);
    });

    it('throws an error if there are not enough operands', function() {
        let stack = [1, 'ADD'];

        expect(() => { calculate(stack) }).to.throw('Not enough operands');
    });
});

describe('infix calculation', function() {
    it('calculates "1 + 1 - 2"', function() {
        let stack = [1, 'ADD', 1, 'SUB', 2];

        expect(calculate(infixToRPN(stack))).to.equal(0);
    });
    it('calculates "1 + 2 x 3 - 4"', function() {
        let stack = [1, 'ADD', 2, 'MUL', 3, 'SUB', 4];

        expect(calculate(infixToRPN(stack))).to.equal(3);
    });
});
