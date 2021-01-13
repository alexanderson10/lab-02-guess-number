// IMPORT MODULES under test here:
// import { example } from '../example.js';import
import { compareNumbers } from '../utils.js'

const test = QUnit.test;

test('if numbers match it should return 0', (expect) => {
    const guess = 4;
    const correctNumber = 4;
    const expected = 0;
    const actual = compareNumbers(guess, correctNumber);
    expect.equal(actual, expected);
});
test('if numbers dont match return -1', (expect) => {
    const guess = 7;
    const correctNumber = 8;
    const expected = -1;
    const actual = compareNumbers(guess, correctNumber);
    expect.equal(actual, expected);

});
test('if numbers dont match because guess is too low return 1', (expect) => {
    const guess = 6
    const correctNumber = 7;
    const expected = -1;
    const actual = compareNumbers(guess, correctNumber);
    expect.equal(actual, expected);
})
