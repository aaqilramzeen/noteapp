// Core Modules First
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


// const myNotes = getNotes();
// console.log(myNotes);

// Customize yargs version
yargs.version('1.1.0');


// add, remove, read, list

//
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
});


//
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
    }
});

//
// Create list command
yargs.command({
    command: 'list',
    describe: 'List of notes',
    handler: function() {
        notes.listNotes();
    }
});

//
// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title);
    }
});


// console.log(yargs.argv);
yargs.parse();
























// const command = process.argv[2];

// if (command === 'add') {
//     console.log(chalk.green('Adding Node'))
// }


//
// npm package - chalk
//
// const chalk = require('chalk');
// console.log(chalk.inverse.green('Success!'));

//
// npm package - validator
//
// const validator = require('validator');
// console.log(validator.isEmail('aaqil@gmail.com'));
// console.log(validator.isURL('https://www.npmjscom/package/validator'));


// import validator from 'validator'; Node does not support 'import' yet. 21.07.2020 ****