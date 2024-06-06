function sortedInsert(stack, element) {
    if (stack.length === 0 || element > stack[stack.length - 1]) {
      stack.push(element);
    } else {
      const top = stack.pop();
      sortedInsert(stack, element);
      stack.push(top);
    }
  }
  
  function sortStack(stack) {
    if (stack.length > 0) {
      const top = stack.pop();
      sortStack(stack);
      sortedInsert(stack, top);
    }
  }
  
  function printStack(stack) {
    console.log(stack.join('\n'));
  }
  
  const stack = [30, -5, 18, 14, -3];
  console.log("\nOriginal Stack:");
  printStack(stack);
  
  sortStack(stack);
  
  console.log("\nSorted Stack:");
  printStack(stack);
  