## Insertion Sort


PsuedoCode


```
 InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp

```
*  arr = [ 8, 4, 23, 42, 16, 15]

- step 1: i starts from 1 and j starts from 0 and Temp is 4
 - and check the array again

- step 2: i starts from 2 and j starts from 1 and temp is 23
 - and check the array again

- step 3: i starts from 3 and j starts from 2 and temp is 42
 - and check the array again

- step 4: i starts from 4 and j starts from 3 and temp is 16
 - and check the array again

- step 5: i starts from 5 and j starts from 4 and temp is 15
 - and check the array again