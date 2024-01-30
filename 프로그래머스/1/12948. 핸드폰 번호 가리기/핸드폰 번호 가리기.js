function solution(phone_number) {
    const res = new Array(phone_number.length-4).fill('*')
    let tmp = phone_number.slice(-4);
    
    res.push(tmp)
    
    return res.join('');
}