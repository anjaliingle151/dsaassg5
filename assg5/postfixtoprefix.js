function postfixToPrefix(expression) {
    const stack = [];
    const operators = new Set(['+', '-', '*', '/']);
    const tokens = expression.split(' ');
  
    tokens.forEach(token => {
      if (operators.has(token)) {
        const [operand2, operand1] = [stack.pop(), stack.pop()];
        stack.push(`(${token} ${operand1} ${operand2})`);
      } else {
        stack.push(token);
      }
    });
  
    return stack.pop();
  }
  
  const postfix = "A B + C D - *";  
  const prefix = postfixToPrefix(postfix);
  console.log(prefix);  
  