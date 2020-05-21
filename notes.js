const fs = require('fs');       // to access and edit files

var fetchNotes = () => {
  try{
    var noteString = fs.readFileSync('./userdata/notes-data.json'); // right now this is a string because that's how 'fs' reads a file
    return JSON.parse(noteString);                       // return the parsed notes (as a list of (object) tuples (title, body) ) loaded from the file
  } catch(e) {                                           // catch runs whenever 'try' fails
    return []                                            // return empty list if notes-data.json file is not present  
  }; 
}

var logNote = note => {
  console.log('----------');
  console.log(`Title: ${note.title}`);      // prints title property of note object
  console.log(`Body: ${note.body}`);        // prints body property of note object
}

// convert JSON back to string and write to the file. 
var saveNotes = (notes) => {
  fs.writeFileSync('./userdata/notes-data.json', JSON.stringify(notes));
}



var addNote = (title, body) => {
  
  var notes = fetchNotes();     // get the existing notes
  var note = { title , body };  // create a note object, like other notes in the database
  var duplicateNotes = notes.filter( note => note.title === title ); // make a list of duplicate entries 

  if(duplicateNotes.length === 0){    // if no duplicate entries
    notes.push(note);                 // append to the end of list
    saveNotes(notes);                 // write back to the file
    return note;                      // return the currently saved note for user to look at
  } 

};

var getAll = () => {
  var notes = fetchNotes();            // get notes from DB in JSON
  console.log(`Printing ${notes.length} note(s)`);
  notes.forEach( note => logNote(note) ); 
}

// get note by title
var getNote = (title) => {
  var notes = fetchNotes();
  var matchednotes = notes.filter( note => note.title === title );
  return matchednotes[0];
  //this iterates through the entire array :/ - improve this, why not break out as soon as match found
}

// remove note by title
var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter( note => note.title !== title ); 
  // creating an array of note objects that don't have that title. 
  // looking for a way to just delete that particular note from the array, as this method doesn't scale with large input 
  saveNotes(filteredNotes);     // array of
  return filteredNotes.length !== notes.length;   // true if note was deleted; if not, returns false                       // was something deleted? 
}


module.exports = 
{ 
  addNote, 
  getAll,
  getNote, 
  removeNote,
  logNote
}


//  archived notes/doubts

  // var note = { title:title, body:body }; // note that we don't have to write {title: "some title", body: "some body"} because this is an ordered pair and it understands the order that they come in

  // for finding duplicates, why don't we breakout of the loop the moment we find a copy?

  // var notes = fetchNotes();
  // isn't this inefficient? you're creating a new array, copying everything
  // and not copying what you don't need?
  // why can't you just delete it from the array?