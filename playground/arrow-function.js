var square = x => x*x ;
console.log(`Square of 9 is ${square(9)}`);

var cube = x => x*x*x ;
console.log(`Cube of 8 is ${cube(8)}`);

var user = {
  name: 'Arpit',
  // sayHi: (boi) => `Hello ${boi}! I am  ${this.name} :)`, //returns undefined for name variable
  // sayHi: (boi) => { console.log(arguments); return `Hi ${boi}! I am  ${user.name} :)`; },  // 'arguments' doesn't have the same meaning, won't get the expected behavior  
  sayHi: boi => `Hello ${boi}, I am  ${user.name} `,    
  sayHello: function (boi) {
    return `Hello ${boi}! I am  ${this.name} :)`;
  },
  // cool function below, awesome alert!
  sayYo(boi) {  
    console.log(arguments)
    return `Yo ${boi}, what up dawg? I'm ${this.name}`  // can use 'this' keyword without any problem
  }
}

console.log(user.sayHi('Ujjwal', 'yup'));
console.log(user.sayHello('Rahul'));
console.log(user.sayYo('Anas', 'Shivu', 'Patel'));

// when you're using arrow functions; you're not going to get the 'arguments' keyword, you're not going to get the 'this' binding (defined in sayHi syntax) that you'd expect.
