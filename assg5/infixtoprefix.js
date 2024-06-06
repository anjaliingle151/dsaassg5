function precedence(operator) {
    const precedenceMap = { '^': 3, '*': 2, '/': 2, '+': 1, '-': 1 };
    return precedenceMap[operator] || 0;
  }
  
  function infixToPrefix(infix) {
    const stack = [];
    let result = '';
  
    for (let i = infix.length - 1; i >= 0; i--) {
      const token = infix[i];
      
      if (/[a-zA-Z0-9]/.test(token)) {
        result = token + result; 
      } else if (token === ')') {
        stack.push(token);
      } else if (token === '(') {
        while (stack.length && stack[stack.length - 1] !== ')') {
          result = stack.pop() + result; 
        }
        stack.pop(); 
      } else {
        while (stack.length && precedence(stack[stack.length - 1]) > precedence(token)) {
          result = stack.pop() + result; 
        }
        stack.push(token);
      }
    }
  
    while (stack.length) {
      result = stack.pop() + result; 
    }
  
    return result;
  }
  
  const infixExpression = "(M+O)*U-H/J";
  const prefixExpression = infixToPrefix(infixExpression);
  console.log("Infix Expression:", infixExpression);
  console.log("Prefix Expression:", prefixExpression);
  