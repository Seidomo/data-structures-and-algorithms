## Merge Sort


### ** Psuedo Code **


```

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left



```


- step 1 if arr has only one element return

- step 2 if more than one element find the middle element

- step 3 add left half to the left array

- step 4 add right half to the right array

- step 5 sort left array

- step 6 sort right array

- step 7 merge left array and right array



*  arr = [ 4, 8, 7, 2, 11, 1, 3]



- ![UML](../assets/code27.png)
