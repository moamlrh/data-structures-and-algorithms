var findDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) return nums[i]
        }
    }
};

const nums = [1, 3, 4, 2, 2]

console.log(findDuplicate(nums))