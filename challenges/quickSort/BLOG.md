## Quick Sort


### ** Psuedo Code **


```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp

```


- step 1 take the last number in the arrary and use it as a pivot

- step 2 make two new arrays to split the original one

- step 3 evaluate if the number is less than the pivot push it to the left array

- step 4 evaluate if the number is greater than the pivot push it to the right array

- step 5 repeat the step above again


arr = [7, -2, 4, 1, 6, 5, 0, -4, 2]

- ![UML](../assets/code28.png)
