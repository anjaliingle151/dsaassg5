
function prefixToInfix(expression) {
    const stack = [];
    const operators = new Set(['+', '-', '*', '/']);
    const tokens = expression.split(' ').reverse();
  
    tokens.forEach(token => {
      if (operators.has(token)) {
        const [operand1, operand2] = [stack.pop(), stack.pop()];
        stack.push(`(${operand1} ${token} ${operand2})`);
      } else {
        stack.push(token);
      }
    });
  
    return stack.pop();
  }
  
  const prefix = "* + A B - D C";  
  const infix = prefixToInfix(prefix);
  console.log(infix); 
  