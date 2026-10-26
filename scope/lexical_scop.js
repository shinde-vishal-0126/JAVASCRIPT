/*
@ LEXICAL SCOPE

  -lexical scope is nothing but static scope
  - Lexical Scope means JavaScript resolves variables based on WHERE THE FUNCTION IS DEFINED NOT WHERE THE FUNCTION IS CALLED. This is also called Static Scope.
  - Lexical Scope is the rule that JavaScript uses to resolve variables based on the physical (lexical) location where functions are defined in the source code.
  - The Golden rule : JavaScript looks at where a function is defined (written), NOT where it is called.
  - Lexical Scope (also called Static Scope) means that JavaScript determines where a variable comes from based on where the code (functions and variables) is written, not where the function is called. */


let x = 10;
function first() {
  console.log(x);
}
function second() {
  let x = 20;
  first();
}
second();


/*
@ Why is it called "Lexical"?
  - The word lexical means related to the written source code.
  - JavaScript decides the parent scope by looking at where functions are physically written. It does not depend on where they execute. */

//1.
let value = 10;
function first() {
  console.log(value);
}

// 2.
function second() {
  let value = 20;
  first();
}
second();
