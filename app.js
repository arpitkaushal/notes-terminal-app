const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of the note',
  demand: true,
  alias: 't',
  string: true
}

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b',
  string: true
}

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
  .version(versionApp)
  .argv;

var command = argv._[0];


// which command did you select?

if (command === 'about') {
  console.log(aboutApp);
}


else if (command === 'add') {

  var note = notes.addNote(argv.title, argv.body);
  if (note) {                         //this part will only work if 'notes' was returned as an object
    console.log('Note created');
    notes.logNote(note);
  }
  else console.log('Note title taken');

} 


else if (command === 'list') {
  notes.getAll();
} 


else if (command === 'read') {
 
  var matchedNote = notes.getNote(argv.title);
  if(matchedNote){
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





// archived comments

// console.log('Command: ', command);
// console.log(`Yargs: `,argv);