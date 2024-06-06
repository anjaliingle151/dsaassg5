const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stack = [];

function main() {
  console.log("\n----------- Stack Operations Using Array -------------");
  console.log("1. Push \n 2. Pop \n 3. Show \n 4. Exit");
  rl.question("Enter your choice : ", Choice);
}

function Choice(option) {
  switch (option) {
    case "1":
      push();
      break;
    case "2":
      pop();
      break;
    case "3":
      show();
      break;
    case "4":
      exit();
      break;
    default:
      console.log("You must choose a valid option.");
      main();
  }
}

function push() {
  rl.question("Enter the element to push : ", (element) => {
    stack.push(element);
    console.log("Element Pushed Successfully");
    show();
  });
}

function pop() {
  if (stack.length === 0) {
    console.log("Stack is empty. No element to pop.");
  } else {
    console.log(`Element Popped: ${stack.pop()}`);
  }
  show();
}

function show() {
    console.log("\n -------------------Stack Contents ------------------");
    if (stack.length === 0) {
      console.log("Stack is empty.");
    } else {
      stack.slice().reverse().forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });
    }
    main();
  }
  
  function exit() {
    console.log("Exiting the program.");
    rl.close();
  }
  
  main();