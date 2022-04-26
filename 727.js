const list = [2, 1, 5, 7, 2, 0, 5];

medianSoFar(list);


function medianSoFar(nums) {
    for (let i = 0; i < nums.length; i++) {
        const sub = nums.slice(0, i + 1);
        const sortedSub = sub.sort(function (a, b) { return a - b });
        if (sortedSub.length % 2 == 0) {
            const high = sortedSub.length / 2;
            const low = high - 1;
            console.log((sortedSub[high] + sortedSub[low]) / 2);
        }
        else {
            const midIndex = Math.floor(sortedSub.length / 2);
            console.log(sortedSub[midIndex]);
        }
    }
}

// This problem was asked by Microsoft.

// Compute the running median of a sequence of numbers.That is, given a stream of numbers, 
// print out the median of the list so far on each new element.

// Recall that the median of an even - numbered list is the average of the two middle numbers.