const welcome = require("cli-welcome");
const pkg = require("./../package.json");
const unhandled = require("cli-handle-unhandled");
const { WELCOME_CLI } = require("../constants/welcome.constants");

module.exports = ({ clear = true }) => {
  unhandled();
  welcome({
    title: WELCOME_CLI.title,
    tagLine: WELCOME_CLI.tagline,
    description: pkg.description,
    version: pkg.version,
    bgColor: "#6cc24a",
    color: "#000000",
    bold: true,
    clear,
  });
};