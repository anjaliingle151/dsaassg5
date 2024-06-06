function nextGreaterElement(arr) {
    const result = new Array(arr.length).fill(-1); 
    const stack = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack.length > 0 && arr[i] > stack[stack.length - 1]) {
        stack.pop();
      }
  
      if (stack.length === 0) {
        result[i] = -1;
      } else {
  
        result[i] = stack[stack.length - 1];
      }
  
      stack.push(arr[i]); 
    }
  
    return result;
  }
  
  const arr = [5, 3, 1, 9];
  const nextGreater = nextGreaterElement(arr);
  console.log(nextGreater); 
  