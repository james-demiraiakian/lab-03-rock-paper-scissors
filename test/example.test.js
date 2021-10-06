// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';

const test = QUnit.test;

// user: tails, throw: heads -- lose -- return false
// user: tails, throw: tails -- win -- return true
// user: heads, throw: heads -- win -- return true
// user: heads, throw: tails -- loss -- return false
test('user: tails, throw: heads', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('tails', 'heads');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user: tails, throw: tails', (expect) => {
    const expected = true;
    const actual = didUserWin('tails', 'tails');
    expect.equal(actual, expected);
});

test('user: heads, throw: heads', (expect) => {
    const expected = true;
    const actual = didUserWin('heads', 'heads');
    expect.equal(actual, expected);
});

test('user: heads, throw: tails', (expect) => {
    const expected = false;
    const actual = didUserWin('heads', 'tails');
    expect.equal(actual, expected);
});
