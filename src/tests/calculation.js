import mocha from 'mocha';
import { expect } from 'chai';
import { infixToRPN, calculate } from '../reducers/calculator';

describe('infix to RPN conversion', function() {
    it('converts basic addition', function() {
        let stack = [1, 'ADD', 1];

        expect(infixToRPN(stack)).to.deep.equal([1, 1, 'ADD']);
    })
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
});
