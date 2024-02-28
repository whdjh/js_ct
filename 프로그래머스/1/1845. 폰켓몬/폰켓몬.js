function solution(nums) {
    let res = [];
    let max = nums.length / 2;
        
    for(let i = 0; i < nums.length; i++) {
        if(res.length < max) {
            if(!res.includes(nums[i])) {
                res.push(nums[i]);
            }
        }
    }
    
    return res.length;    
}