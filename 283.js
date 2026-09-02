// // moves zeros

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.



// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


const a = (nums) => {
    // console.log(nums.sort((a,b) => a - b))
    // if(nums.includes("0")){
    //     console.log("1")
    // }

    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            console.log(nums);
            
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++
        }
    }
    return nums

}


console.log(a([0, 1, 0, 3, 13]))