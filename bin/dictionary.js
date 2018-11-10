#!/usr/bin/env node
require('dotenv').load();

const argv = require('yargs').argv;
const term = require('terminal-kit').terminal;
const OxfordAPI = require('oxford-dictionary-api');
const words = argv._.length ? argv._ : undefined; // Input without arguments show up in the _ array.
const none_found = 'None found.';

if (process.env.APP_ID && process.env.APP_KEY) { // Check that our API credentials are set.
    if (words) {
        const dict = new OxfordAPI(process.env.APP_ID, process.env.APP_KEY);
        dict.find(words[0], function(err, data) {
            if (err) {
                term.bold.red(Error(err + '.\n'));
            } else {
                const entries = data.results[0].lexicalEntries[0].entries[0]; // A good starting point that has necessary data.
                const senses = entries.senses; // Contains definitions among other things.
                const etymology = entries.etymologies || none_found;

                let definitions = []; // Start with an empty array...

                for (let sense of senses) { // ...and build it up with definitions.
                    definitions.push(sense.definitions[0]);
                }

                // Output etymology.
                term.bold.underline('Etymology:');
                term(' ' + etymology + '\n\n');

                // Output definitions.
                term.bold.underline('Definitions:\n');

                if (definitions.length) {
                    for (let definition of definitions) {
                        term('\t\u2022 ' + definition + '\n');
                    }
                } else {
                    term(none_found);
                }
            }
        });
    } else {
        term.bold.red(Error('No input.\n'));
    }
} else {
    term.bold.red(Error('Please make sure your APP_ID and APP_KEY are set.\n'));
}
