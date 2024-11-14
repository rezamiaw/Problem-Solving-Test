function balancedbrackets(string) {
  const stack = [];
  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of string) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

console.log(balancedbrackets("{[()]}"));
console.log(balancedbrackets("{[(])}"));
console.log(balancedbrackets("{(([])[[]])[[]]}"));
