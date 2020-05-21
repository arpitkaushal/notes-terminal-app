const _ = require('lodash');    
const yargs = require('yargs');       // to parse user input from terminal

const notes = require('./notes.js');  // this contains all CRUD operations 

// constraints for title
const titleOptions = {
  describe: 'Title of the note',
  demand: true,
  alias: 't',
  string: true,
  requiresArg: true             // string cannot be empty
}

// constraints for body
const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b',
  string: true,
  requiresArg: true             // string cannot be empty
}

// app info to get from terminal
const aboutApp = "This app was created to help create and manage our notes from the command line. How cool is that?"
const versionApp = "You're using the best version of the notes app!"

const argv = yargs
  .command('about', 'Learn about this awesome app')
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .version(versionApp)  //  display info when 'node app.js --version' is run
  .argv;

var command = argv._[0];


// which command did you select?

if (command === 'about') {
  console.log(aboutApp);
}


else if (command === 'add') {

  var note = notes.addNote(argv.title, argv.body);
  if (note) {                         // this part will only work if 'note' was returned as an object
    console.log('Note created');
    notes.logNote(note);              // prints formatted note  
  }
  else console.log('Note title taken'); // this is the only other possibility if note wasn't returned, because we've already taken care of bad input

} 


else if (command === 'list') {
  notes.getAll();
} 


else if (command === 'read') {
 
  var matchedNote = notes.getNote(argv.title);
  if(matchedNote){        // run iff getNote returned a note 
    console.log('Note found');
    notes.logNote(matchedNote);
  } else console.log('Note not found');

} 


else if (command === 'remove') {

  var removedNote = notes.removeNote(argv.title);
  var message = removedNote ? 'Note was removed':'Note not found';
  console.log(message);

}
 

else {
  console.log('Command not recognized');
}
