'use strict';


function insertShiftArray(arr, num){
    var toogle = true;
var newArray = [];
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] < num)
        {
          newArray.push(arr[i]);  
        }if(arr[i] > num && toogle === true ){
            newArray.push(num);
           toogle = false
        }if(arr[i] > num && toogle === false){
          newArray.push(arr[i]);
        }

        
    }
    return newArray;
}





module.exports = insertShiftArray;