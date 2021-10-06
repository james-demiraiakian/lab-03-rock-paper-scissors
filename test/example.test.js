// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';

const test = QUnit.test;

// user: tails, throw: heads -- lose -- return false
// user: tails, throw: tails -- win -- return true
// user: heads, throw: heads -- win -- return true
// user: heads, throw: tails -- loss -- return false
test('userChoice: pig, actualChoice: meg', (expect) => {
    const expected = 'escaped';
    const actual = didUserWin('pig', 'meg');
    expect.equal(actual, expected);
});

// test('user: tails, throw: tails', (expect) => {
//     const expected = true;
//     const actual = didUserWin('tails', 'tails');
//     expect.equal(actual, expected);
// });

// test('user: heads, throw: heads', (expect) => {
//     const expected = true;
//     const actual = didUserWin('heads', 'heads');
//     expect.equal(actual, expected);
// });

// test('user: heads, throw: tails', (expect) => {
//     const expected = false;
//     const actual = didUserWin('heads', 'tails');
//     expect.equal(actual, expected);
// });
