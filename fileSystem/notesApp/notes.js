const fs = require("fs");


function addNotes(note){
    const notes = fs.existsSync("fileSystem/notesApp/notes.json")
                 ? JSON.parse(fs.readFileSync("notes.json","utf-8"))
                 :[]
    
    notes.push({note,createdAt:new Date()});
    fs.writeFileSync("fileSystem/notesApp/notes.json", JSON.stringify(notes, null,2))
}

// addNotes("finish backend")
// console.log("Note Added");

addNotes("leran react")
console.log("Note Added");
