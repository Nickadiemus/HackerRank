function modifyArray(nums) {
    nums.forEach((n, i) => {
        if (n % 2 == 0) {
            nums[i] *= 2;
        }
        else {
            nums[i] *= 3;
        }
    })
    console.log(nums);
}

modifyArray([1,2,3,4,5])
