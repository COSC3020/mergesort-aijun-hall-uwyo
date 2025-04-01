function mergesort(array) {
    const sorted = new Array(array.length);
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
            let tempIndex = start;

            // If elements in left AND right subarrays
            while (leftStartingIndex < mid && rightStartingIndex < end) {
                if (array[leftStartingIndex] <= array[rightStartingIndex]) {
                    sorted[tempIndex] = array[leftStartingIndex];

                    tempIndex = tempIndex + 1;
                    leftStartingIndex = leftStartingIndex + 1;
                } else {
                    sorted[tempIndex] = array[rightStartingIndex];

                    tempIndex = tempIndex + 1;
                    rightStartingIndex = rightStartingIndex + 1;
                }
            }

            // Remaining elements in left subarray
            while (leftStartingIndex < mid) {
                sorted[tempIndex] = array[leftStartingIndex];

                tempIndex = tempIndex + 1;
                leftStartingIndex = leftStartingIndex + 1;
            }

            // Copy remaining elements from right subarray
            while (rightStartingIndex < end) {
                sorted[tempIndex] = array[rightStartingIndex];

                tempIndex = tempIndex + 1;
                rightStartingIndex = rightStartingIndex + 1;
            }

            // Merge
            for (let i = start; i < end; i++) {
                array[i] = sorted[i];
            }
        }
    }

    return array;
}
