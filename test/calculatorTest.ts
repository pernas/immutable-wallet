import Calculator from '../index';
import { expect } from 'chai';

describe('Calculator', () => {
  it('should add two numbers', () => {
    const calc : Calculator = new Calculator();

    // Chai assertion.
    expect(calc.add(5, 3)).to.equal(8);
  });
});
