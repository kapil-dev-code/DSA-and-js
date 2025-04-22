let arr = [4, 7, 2, 8, 8, 5,1,0,-1]
//TODO: bubble sort

// pushing maximum to the right by adjacent swapping 

/*
Time Complexity:
Worst: O(n²)
Average: O(n²)
Best: O(n) (when already sorted)
Space Complexity: O(1) (in-place)
*/
const bubbleSort = (arr) => {
    let myArr = arr
    const length = myArr.length
    if (arr.length <= 1) {
        return myArr
    }
    for (let i = 0; i < length - 1; i++) {
        let isSortable = true
        for (j = 0; j < length - i - 1; j++) {
            if (myArr[j] > myArr[j + 1]) {
                [myArr[j], myArr[j + 1]] = [myArr[j + 1], myArr[j]];
                isSortable = false;

            }
        }
        if (isSortable) {
            return myArr
        }
    }
    return myArr
}
//TODO: selection sort
// select the minimum and place it in to start

/*
Time Complexity:
Worst: O(n²)
Average: O(n²)
Best: O(n²)
Space Complexity: O(1) (in-place)
*/
const selectionSort = (arr) => {
    let myArr = arr
    const length = myArr.length
    if (arr.length <= 1) {
        return myArr
    }

    for (let i = 0; i < myArr.length - 1; i++) {
        let min = i
        for (let j = i; j < myArr.length; j++) {
            if (myArr[i] > myArr[j]) {
                min = j
            }
        }
        [myArr[i], myArr[min]] = [myArr[min], myArr[i]]
    }
    return myArr
}
// console.log(selectionSort(arr),"selection")

//TODO: selection sort
// take an element and place it it's correct position

/*
Time Complexity:
Worst: O(n²)
Average: O(n²)
Best: O(n) (when nearly or already sorted)
Space Complexity: O(1) (in-place)
*/
const insertionSort = (arr) => {
    let myArr = arr
    const length = myArr.length
    if (length <= 1) {
        return myArr
    }
    for (let i = 1; i < length; i++) {
        let temp = myArr[i]
        j = i
        while (j >= 0 && myArr[j-1] > temp) {
            myArr[j] = myArr[j-1]
            j--
        }
        myArr[j] = temp
    }

    return myArr

}
console.log(insertionSort(arr),"my insertion sort")

// TODO: merge sort
// divide and conquer

/*
Time Complexity:
Worst: O(n log n)
Average: O(n log n)
Best: O(n log n)
Space Complexity: O(n) (uses extra space for merging)
*/

/*
Approach:
1. Divide the array into two halves.
2. Recursively apply merge sort to both halves.
3. Merge the two sorted halves:
   - Compare the smallest elements of each half.
   - Build a new sorted array by repeatedly choosing the smaller element.
4. Base case: If the array has 0 or 1 elements, it is already sorted.
*/
const myMergeSort = (arr) => {
    let myArr = arr
    const length = myArr.length
    if (arr.length <= 1) {
        return myArr
    }

    const mergeSort = (arr, left, right) => {
        if (left < right) {
            let mid = parseInt(left + (right - left) / 2)
            mergeSort(arr, left, mid)
            mergeSort(arr, mid + 1, right)
            merge(arr, left, mid, right)
        }
    }
    const merge = (arr, left, mid, right) => {
        let mergeArr = []
        let i = left
        let j = mid + 1
        let k=0
        while (i <= mid && j <= right) {

            if (arr[i] <= arr[j]) {
                mergeArr[k]=arr[i]
                // mergeArr.push(arr[i])
                i++
            } else {
                mergeArr[k]=arr[j]
                // mergeArr.push(arr[j])
                j++
            }
            k++
        }
        while (i <= mid) {
            mergeArr[k]=arr[i]
            i++
            k++
        }
        while (j <= right) {
            mergeArr[k]=arr[j]
            j++
            k++
        }
        for (let k = 0; k < mergeArr.length; k++) {
            // look this 
            arr[left + k] = mergeArr[k]
        }

    }
    mergeSort(myArr, 0, myArr.length - 1)


    return myArr
}
// console.log(myMergeSort(arr),"merge sort")

//TODO: quick sort

/*
Time Complexity:
Worst: O(n²) (when pivot is always smallest/largest)
Average: O(n log n)
Best: O(n log n)
Space Complexity: O(log n) (due to recursive calls)
*/

/*
Approach:
1. Choose a pivot element (commonly the first, last, middle, or a random element).
2. Partition the array:
   - Move elements smaller than the pivot to the left.
   - Move elements greater than the pivot to the right.
3. Recursively apply the same logic to the left and right sub-arrays.
4. Base case: If the array has 0 or 1 elements, it's already sorted.
*/
const quickSort = (arr) => {
    let myArr = [...arr]
    const length = myArr.length
    if (myArr.length <= 1) {
        return myArr
    }
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }


    const partition = (low, high) => {
        let pivot = myArr[low]
        let i = low;
        let j = high
        while (i < j) {
            while (myArr[i] <= pivot) {
                i++
            }
            while (myArr[j] > pivot) {
                j--
            }
            if (i < j)
                swap(myArr, i, j)
        }
        swap(myArr, low, j)
        return j
    }
    const quick = (l, h) => {
        if (l < h) {
            let position = partition(l, h)
            quick(l, position - 1)
            quick(position + 1, h)
        }
    }
    quick(0, length - 1)

    return myArr
}
// console.log(quickSort(arr), 'quick')


