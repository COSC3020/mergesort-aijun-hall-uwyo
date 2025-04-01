function mergesort(array) {
    const length = array.length;

    for (let section_length = 1; section_length < length; section_length *= 2) {

        for (let start = 0; start < length; start += (2 * section_length)) {
            // Don't go past end of array by using Math.min with length
            const mid = Math.min(start + section_length, length);
            const end = Math.min(start + (2 * section_length), length);

            // Define indicies
            // Left subarray = array[start] - array[mid - 1]
            // Right subarray = array[mid] - array[end - 1]
            let leftStartingIndex = start;
            let rightStartingIndex = mid;

            // If elements in left AND right subarrays
            while (leftStartingIndex < rightStartingIndex && rightStartingIndex < end) {
                if (array[leftStartingIndex] <= array[rightStartingIndex]) {
                    leftStartingIndex = leftStartingIndex + 1;
                } else {
                    const temp = array[rightStartingIndex];
                    let index = rightStartingIndex

                    // Shift everything to the right
                    while (index > leftStartingIndex) {
                        array[index] = array[index - 1];
                        index = index - 1;
                    }

                    array[leftStartingIndex] = temp;

                    // Update all indicies to shuffle along to the right
                    leftStartingIndex = leftStartingIndex + 1;
                    rightStartingIndex = rightStartingIndex + 1;
                }
            }
        }
    }

    return array;
}
