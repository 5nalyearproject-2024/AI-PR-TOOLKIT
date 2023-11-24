const meow = require("meow");
const meowHelp = require("cli-meow-help");

const flags = {
  clear: {
    type: `boolean`,
    default: true,
    alias: `c`,
    desc: `Clear the console`,
  },
  debug: {
    type: `boolean`,
    default: false,
    alias: `d`,
    desc: `Print debug info`,
  },
  version: {
    type: `boolean`,
    alias: `v`,
    desc: `Print CLI version`,
  },
  pullRequest : {
    type : `string`,
    alias : `pr`,
    desc : `Pull Request Number`,
  }
};

const commands = {
  help: { desc: `Print help info` },
  generate : {desc : `Generate the documentation for the provided PR number`},
  review : {desc : `Reviews the code changes for the provided PR number`}
};

const examples = [
    {
        command : `generate`,
        flags : [`pullRequest`]
    }
]

const helpText = meowHelp({
  name: `AI-PR-TOOLKIT`,
  flags,
  commands,
  examples
});

const options = {
  inferType: true,
  description: false,
  hardRejection: false,
  flags,
};

module.exports = meow(helpText, options);