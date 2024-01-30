function solution(arr, divisor) {
    let res = [];
    for(i = 0; i < arr.length; i++) {
      if(arr[i] % divisor === 0) {
        res.push(arr[i]);
      }
    }
    
    if(res.length == 0) {
      res.push(-1);
    }
    
    res.sort((a,b) => a - b);
    
    return res;
}