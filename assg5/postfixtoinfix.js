function postfixToInfix(expression) {
    const stack = [];
    
    for (const char of expression) {
      if ('+-*/'.includes(char)) {
        const [operand2, operand1] = [stack.pop(), stack.pop()];
        stack.push(`(${operand1}${char}${operand2})`);
      } else {
        stack.push(char);
      }
    }
  
    return stack.pop();
  }
  
  const postfixExpression = "AB+C*D-";
  const infixExpression = postfixToInfix(postfixExpression);
  console.log("Postfix Expression:", postfixExpression);
  console.log("Infix Expression:", infixExpression);
  