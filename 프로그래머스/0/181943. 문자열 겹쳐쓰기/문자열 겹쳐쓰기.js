function solution(my_string, overwrite_string, s) {
    const str = [...my_string];
    // splice() : 배열로부터 특정 범위를 삭제하거나 새로운 값을 추가 또는 기존 값 대체 가능
    // array.splice(index, 삭제할 범위, 추가·대체할 값)
    str.splice(s, overwrite_string.length, overwrite_string);
    return str.join('');
}