/*
This represents a list as a function that takes an array and returns a new array
with the list items appended to the end of the array.

Inspired by Eric Lippert's post here:
https://ericlippert.com/2019/01/24/an-interesting-list-structure-part-2/

This implementation differs from Eric's in a few ways:

 1. It operates on mutable arrays rather than an immutable list. But the hughes
    list itself is still logically immutable
 2. The method names use JS conventions
 3. There is no wrapper class. The list is a function.
 4. The function underlying the list appends to the end rather than the
    beginning of the array.

For those who haven't read the post, the key advantage of this data structure is
that concatenation and prepending are both O(1) operations (along with appending
to the end).

Notice that the only operation done on arrays is "push", which is an amortized
O(1) operation in most cases.

*/

export const fromArray = arr => xs => xs.push(...arr);
export const toArray = ls => { const arr = []; ls(arr); return arr; };

export const empty = xs => xs;
export const single = x => xs => xs.push(x);
export const concat = (ls1, ls2) => xs => { ls1(xs); ls2(xs) };
// Push x to _end_ of list ls (called "append" in Eric's post)
export const push = (ls, x) => xs => { ls(xs); xs.push(x) };
// Add x to the _beginning_ of the list ls (called "push" in Eric's post)
export const unshift = (ls, x) => xs => { xs.push(x), ls(xs) };
