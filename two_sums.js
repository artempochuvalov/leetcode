var twoSum = function(nums, target) {
    const numsRead = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (numsRead[num] === undefined) {
            numsRead[num] = [i];
        } else {
            numsRead[num].push(i);
        }
        
        const diff = Math.abs(target - num);
        if (numsRead[diff] !== undefined) {
            if (diff === num) {
                if (numsRead[diff].length === 2) {
                    return numsRead[diff];
                }
            } else {
                return [numsRead[diff][0], i];
            }
        }
    }
};