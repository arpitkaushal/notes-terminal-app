// console.log('Starting app');
// const fs = require('fs');       //filesystem builtin pacakage

// fs.appendFile('greetings.txt', //creates a new file if it doesn't exists
//               'Hello world!',  //adds this string argument to the file, in a new line   
//               err => {         //call back function 
//                 if (err) console.log('Unable to write to file'); // how does it know if this is what I want on error or successful submission
//               })

// notes on callback - 
// This callback will get executed when either an error occurs or the file successfully gets written. Inside the function, we have an if statement; if there is an error, we simply print a message to the screen, Unable to write to file.


console.log('Starting app');
const fs = require('fs');
const os = require('os');   //to get userinfo
const _ = require('lodash');

var user = os.userInfo();   
// console.log(user);
fs.appendFile('greetings.txt', 
              // 'Hello ' + user.username + '!',    //using string concatenation
              `Hello ${user.username}!`,            //using backticks
                err => {
                if (err) console.log('Unable to write to file');
              })


// relative paths start with ./ (a dot forward slash), which points to the current directory that the file is in.


const notes = require('./notes.js'); // for requiring files, we need to tell the relative path

// about exports
    // The exports object on the module property and everything on this object gets exported. This object gets set as the const variable, notes. This means that we can set properties on it, they will get set on notes, and we can use them inside app.js

    // Remember, exports is an object, so you can set multiple properties.

console.log('yo!');

// about arrow functions
    // if you have an anonymous function, you can swap it with an arrow function without any problems. The big difference is that the arrow function is not going to bind the () => {} keyword or the arguments array


console.log('something');

// npm init and the questions that follow
    // The questions include the following:

    // name: Your name can't have uppercase characters or spaces; you can use notes-node, for example. You can hit enter to use the default value, which is in parentheses.
    // version: 1.0.0 works fine too; we will leave most of these at their default value.
    // description: We can leave this empty at the moment.
    // entry point: This will be app.js, make sure that shows up properly.
    // test command: We'll explore testing later in the course, so for now, we can leave this empty.
    // git repository: We'll leave that empty for now as well.
    // keywords: These are used for searching for modules. We'll not be publishing this module so we can leave those empty.
    // author: You can type your name or leave it blank.
    // license: For the license, we'll stick with ISC at the moment; since we're not publishing it, it doesn't really matter.

console.log('yo!');

// NODEMON
// The nodemon will be responsible for watching our app for changes and restarting the app when those changes occur. 
//  This also prevents a ton of errors where you are running a web server, you make a change, and you forget to restart the web server. You might think your change didn't work as expected because the app is not working as expected, but in reality, you just never restarted the app.


var uniqarr = _.uniq(['foobar', 1, 'foobar', 1 ,2,3,4]);


console.log(_.isString(true));
console.log(_.isString('Hello'));

// To access the command-line arguments your app was initialized with, you'll want to use that process object that we explored in the first lesson.

// We can log out all of the arguments using console.log to print them to the screen; it's on the process object, and the property we're looking for is argv.

// The argv object is short for arguments vector, or in the case of JavaScript, it's more like an arguments array. This will be an array of all the command-line arguments passed in, and we can use them to start creating our application.

console.log(process.argv);
// so when you run the command 'node app.js fuck you bitch' in the terminal, 
// the output is 
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\Web\\node-next.tech\\app.js',
//     'fuck',
//     'you',
//     'bitch'
//   ]
var command = process.argv[2];
console.log(`the command you selected was ${command}`);
if (command === 'add') {
  var sum = notes.add(process.argv[3],process.argv[4]);
  console.log(sum);
}


if(command === 'add'){
    console.log('Adding new note');
  } else if (command === 'list') {
    console.log('Listing all notes');
  }  else if (command === 'read'){
    console.log('Fetching note');
  } else if (command === 'remove'){
    console.log('Removing note');
  } else {
    conosle.log('Command not recognized');
  }

// we'll use yargs to parse command line arguments because otherwise I'm speculating that it'll be a lot of if-else blocks to parse key value pairs from the comamnd


// why to use --save option with npm install?
// As of npm 5.0.0, installed modules are added as a dependency by default, so the --save option is no longer needed. The other save options still exist and are listed in the documentation for npm install.

// Original answer:

// Before version 5, NPM simply installed a package under node_modules by default. When you were trying to install dependencies for your app/module, you would need to first install them, and then add them (along with the appropriate version number) to the dependencies section of your package.json.

// The --save option instructed NPM to include the package inside of the dependencies section of your package.json automatically, thus saving you an additional step.

// In addition, there are the complementary options --save-dev and --save-optional which save the package under devDependencies and optionalDependencies, respectively. This is useful when installing development-only packages, like grunt or your testing library.

// Since typeof is an operator, it gets typed in lowercase, there is no camel casing.

// As shown in the preceding code output, first, we will get our type, which is a string, and this is great, because remember, JSON is a string. Next, we will get our object, which looks pretty similar to a JavaScript object, but there are a few differences. These differences are as follows:

// First, your JSON will have its attribute names automatically wrapped in double quotes. This is a requirement of the JSON syntax.
// Next, you'll notice your strings are also wrapped in double quotes as opposed to single quotes.
// Now, JSON doesn't just support string values, you can use an array, a Boolean, a number, or anything else. All of those types are perfectly valid inside of your JSON. In this case, we have a very simple example where we have a name property and it's set to "John".

// This is the process of taking an object and converting it into a string. Next, we'll define a string and convert that into an object we can actually use in our app.

// let's say we get the earlier-defined JSON from a server or we grab it from a text file. Currently, it's useless; if we want to get the name value, there is no good way to do that because we're using a string, so personString.name doesn't exist. What we need to do is take the string and convert it back into an object.

// Converting a String Back to an Object
// To convert the string back to object, we'll use the opposite of JSON.stringify, which is JSON.parse. Let's make a variable to store the result. We'll create a person variable and it will be set equal to JSON.parse

// When someone wants to read their note, we'll use the following code to read it:
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

// fs readFileSync and writeFileSync method read and write 'text' or 'string' per to say. So, when you read from a JSON file, you fon't get the array, or the object, but you get text. So, you need to parse it. Once parsed, it's ready to use. 
// Again, when you want to write, make sure you pass it through JSON.stringify. 