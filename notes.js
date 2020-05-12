const fs = require('fs');

var fetchNotes = () => {
  try{
    var noteString = fs.readFileSync('./userdata/notes-data.json'); //right now this is a string
    return JSON.parse(noteString);                       //return the loaded the notes from the file
  } catch(e) {                                           // catch runs whenever 'try' fails
    return []                                            //this to help if the notes-data.json file is not present  
  }; 
}

var logNote = note => {
  console.log('----------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);   
}

var saveNotes = (notes) => {
  fs.writeFileSync('./userdata/notes-data.json', JSON.stringify(notes));
}



var addNote = (title, body) => {
  
  var notes = fetchNotes();     
  var note = { title , body };
  var duplicateNotes = notes.filter( note => note.title === title ); //chk discarded comments

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  } 

};

var getAll = () => {
  var notes = fetchNotes(); 
  console.log(`Printing ${notes.length} note(s)`);
  notes.forEach( note => logNote(note) );
}

var getNote = (title) => {
  var notes = fetchNotes();
  var note = notes.filter( note => note.title === title ); //this iterates through the entire array :/ - improve this, why not break out as soon as match found
  return note[0];
}

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter( note => note.title !== title );
  saveNotes(filteredNotes);
  return filteredNotes.length !== notes.length;                       // was something deleted? 
}


module.exports = 
{ addNote, 
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