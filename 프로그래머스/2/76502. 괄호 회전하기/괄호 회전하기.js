function solution(s) {
    let answer = 0

    for (let i = 0; i < s.length; i++) {
        const stack = []
        let flag = true

        for (let j = 0; j < s.length; j++) {
            const char = s[(i + j) % s.length]

            // 여는 괄호
            if (char === '(' || char === '[' || char === '{')  stack.push(char)
            
            // 닫는 괄호
            else {
                if (stack.length === 0) {
                    flag = false
                    break
                }

                const top = stack[stack.length - 1]

                if ((char === ')' && top !== '(') || (char === ']' && top !== '[') || (char === '}' && top !== '{')) {
                    flag = false
                    break
                }

                stack.pop()
            }
        }
        if (flag && stack.length === 0) answer++
    }

    return answer
}
