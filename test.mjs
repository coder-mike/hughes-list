// Run using
// node --experimental-modules test.mjs

import * as HL from './hughes-list';
import * as assert from 'assert';

// Short-hand to assert that a given list has the same items has a given array
const checkList = (ls, arr) => assert.deepEqual(HL.toArray(ls), arr);

// Two lists for testing. Note that these lists are logically immutable since
// they're re-used multiple times in the rest of this file
const list1 = HL.fromArray([1, 2, 3]);
const list2 = HL.fromArray([4, 5, 6]);

checkList(HL.empty                               , []);
checkList(HL.push(list1, 4)                      , [1, 2, 3,   4]);
checkList(HL.concat(list1, list2)                , [1, 2, 3,   4, 5, 6]);
checkList(HL.unshift(list1, 0)                   , [0,   1, 2, 3]);
checkList(HL.concat(HL.push(list1, 10), list2)   , [1, 2, 3,   10,   4, 5, 6]);
checkList(HL.concat(HL.unshift(list1, 10), list2), [10,   1, 2, 3,   4, 5, 6]);
checkList(HL.concat(list1, HL.push(list2, 10))   , [1, 2, 3,   4, 5, 6,   10]);
checkList(HL.concat(list1, HL.unshift(list2, 10)), [1, 2, 3,   10,   4, 5, 6]);
