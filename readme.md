This is a command line based notes app. I followed tutorial from https://next.tech , in particular [this](https://next.tech/catalog/learning-node-js-fundamentals) course.

## This app is a demonstration of CRUD operations. So, you can add, remove, read and list your notes. 


>## Setting up the app.

1. Clone the repo locally. 
2. Open a terminal inside the project folder. 
3. Once the terminal opens, run, \
` npm install ` 
4. If this runs successfully, all the dependencies will be installed. 
5. Test the app by running the following commands, \
`node app.js about` \
`node app.js --help` \
`node app.js add --title 'A sweet memory' --body 'I had my favorite ice-cream today'` \

>## A few sample commands to try out

Removing a note \
`node app.js remove -t 'Secrets'` 

Listing out all notes \
`node app.js list` 

Read a particular note (fetched via unique title) \
`node app.js read -t 'A sweet memory' ` 

Adding a note \
`node app.js add -t 'New Note' -b 'Interesting stuff goes here! :) '`

For any of these four commands, you can get help by running \
`node app.js \<command-name> --help` \
Example -  \
`node app.js remove --help`

>## Contribute to this app 

1. At the end of `notes.js` file, I have added some comments which aim at improving the efficiency of the operations  `add` , `remove`, and `read`. Basically, I'm iterating over the entire JSON file, when it can be avoided. Suggestions to improve these operations for large datsets is welcome! \
If you want to discuss this over mail, you can reach me at kaushal.arpit@gmail.com  

2. I've also listed some issues in the file `bugs-suggestions.md`

>## Note 

1. The `playground` directory in the root of the project contains files that aren't related to the app but they helped in understanding the implementation of some features crucial to the app.
2. Don't note your secrets in the app just yet, because the data is not encrypted. 😜