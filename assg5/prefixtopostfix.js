function prefixToPostfix(expression) {
    const stack = [];
    const operators = new Set(['+', '-', '*', '/']);
    const tokens = expression.split(' ').reverse();
  
    tokens.forEach(token => {
      if (operators.has(token)) {
        const [operand1, operand2] = [stack.pop(), stack.pop()];
        stack.push(`${operand1} ${operand2} ${token}`);
      } else {
        stack.push(token);
      }
    });
  
    return stack.pop();
  }
  
  const prefix = "* + A B - C D";
  const postfix = prefixToPostfix(prefix);
  console.log(postfix); 
  