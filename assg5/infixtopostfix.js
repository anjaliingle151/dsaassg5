function infixToPostfix(infix) {
    const stack = [];
    let postfix = '';

    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };

    for (let token of infix) {
        if (/[a-zA-Z0-9]/.test(token)) {
            postfix += token;
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfix += stack.pop();
            }
            stack.pop();
        } else {
            while (stack.length > 0 && precedence[token] <= precedence[stack[stack.length - 1]]) {
                postfix += stack.pop();
            }
            stack.push(token);
        }
    }

    while (stack.length > 0) {
        postfix += stack.pop();
    }

    return postfix;
}

const infixExpression = "G + X * (Z- A) / T";
const postfixExpression = infixToPostfix(infixExpression);
console.log("Postfix Expression:", postfixExpression); 