function solution(a, b) {
    str1 = `${a}${b}`;
    str1_integer = Number(str1);
    str2_integer = 2 * a * b;
    
    return str1_integer > str2_integer ? str1_integer : str2_integer;
}