# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Loops: The first loop runs while `section_length < length`, starting from 1, and incrementing by `section_length *= 2`. This means the loop doubles the section length each iteration.

$2^{k - 1}$ where k is the number of iterations. This gives a runtime of $log_2(n)$

The second inner loop divides the array into 2 sections of `section_length`. Processing of both sides of the array are done inside this loop though, so each iteration merges `n` elements for:

$O(n)$

Comparisons: Line 30 `while (leftStartingIndex < mid && rightStartingIndex < end)` and the following other `while` blocks allows for each element in the subarrays to be iterated over, and since each iteration merges the subarrays once, each element of the entire array is copied exactly once per outer loop iteration.

$O(n)$

Memory Allocation: Line 2 `const sorted = new Array(array.length);` explicitly defines the length of the sorted array as `array.length`:

$O(n)$

Overall:

$O(n) * O(log_2(n)) \ \rightarrow \ \Theta(n * log_2(n))$

Since the top level loop's runtime is logarithmic, this means that the Best, Average, and Worst Case are all $\Theta(n * log_2(n))$