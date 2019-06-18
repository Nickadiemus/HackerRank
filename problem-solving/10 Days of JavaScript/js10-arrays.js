function getSecondLargest(nums) {
    nums.sort((a,b) => {
      return b - a;
    });
    var max = nums[0];
    for(var i = 0; i < nums.length-1; i++){
      if(max != nums[i]){
        return nums[i];
      }
    }

}

getSecondLargest([8,6,4,3,32,44])
