// This is the starting file for the command line to work .
// #!/usr/bin/env node

const init = require("./utils/init");
const cli = require('./utils/cli');


const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async function start ()
{
    
    init({clear : true});
    console.log(input,flags);
    input.includes("help") && cli.showHelp(0);
})();


