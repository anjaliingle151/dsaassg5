function balancedPara(expression) {
    const stack = [];
    const matchingPara = { ")": "(", "}": "{", "]": "[" };
  
    for (const char of expression) {
      if (matchingPara[char]) {
        if (stack.pop() !== matchingPara[char]) return false;
      } else if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      }
    }
    
    return stack.length === 0;
  }
  
  console.log(balancedPara("{[()]}"));  
  console.log(balancedPara("{[(])}"));  
  