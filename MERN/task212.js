// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

 

const numcheck = (nums) => {
    let a1 = nums
    let a2 = nums.filter((item,index) => nums.indexOf(item) == index)

    if(a1.length == a2.length){
        return true
    }
    else{   
        return false
    }

}

console.log(numcheck([1,2,3,1]))