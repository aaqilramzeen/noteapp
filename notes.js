const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = loadNotes();

    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

    // debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log(chalk.green('New Note Added'));
    }
    else {
        console.log(chalk.red('Note title taken'));
    }
}

const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes));


const removeNote = (title) => {
    const notes = loadNotes();

    const noteToRemove = notes.filter((note) => note.title === title);
    const removeNote = notes.indexOf(noteToRemove[0]);

    if (removeNote !== -1) {
        notes.splice(removeNote, 1);
        saveNotes(notes);
        console.log(chalk.green('Note Removed'));
    }
    else if (notes.length === 0) {
        console.log(chalk.yellow('No notes found'));
    }
    else {
        console.log(chalk.red('Note title not found'));
    }

}


const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.black.bgCyan('Your Notes'));
    notes.forEach(note => console.log(chalk.yellow(note.title)));

}


const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find(note => note.title === title);
    (note)? 
        console.log(chalk.yellow(note.title) + '\n' + note.body):
        console.log(chalk.red('Note title not found'));  
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};