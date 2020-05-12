>### Bug 1 : In one of the lessons to configure yargs, there was a suggestion to use 'string' object as a property to the option 'address' to prevent passing empty arguments (which might be considered a boolean by yargs). 

I was elated to find that such an option exists because earlier when I ran the notes app in it's final form, I could still run a command like \
`node app.js add --title --body` 
 And this would run successfully, returning, 

`Note created `\
 `--`\
`Title: `\
`Body:`

It was a design flaw, just specifying `demand: true` did not help. It just asserted the occurrence of `--title` and `--body` properties in the `argv` object. 

So, I went on to edit my `app.js` file on the note-node app, and added `string : true` option to both title and body. **But this did not work either. The app is till creating empty notes.**

Attaching the output from my terminal (after making changes to `app.js`) for your reference.

![](\img\empty-arguments.jpg)

>## Update - Fixed Bug 1

Added the option `requiresArg` in yargs object. 

    const titleOptions = {
        describe: 'Title of the note',
        demand: true,
        alias: 't',
        string: true,
        requiresArg: true           // string cannot be empty
    }

    const bodyOptions = {
        describe: 'Body of the note',
        demand: true,
        alias: 'b',
        string: true,
        requiresArg: true          // string cannot be empty
    }
