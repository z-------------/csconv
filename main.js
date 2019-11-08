#!/usr/bin/env node

const fs = require("fs");
const { promisify } = require("util");
const path = require("path");

const PARSERS_PATH = path.join(__dirname, "parse");
const GENERATORS_PATH = path.join(__dirname, "generate");

/**
 * Checks if a file exists in a given directory
 * @param {string} dirPath 
 * @param {string} filename 
 */
const fileExistsInDir = (dirPath, filename) => {
  return fs.readdirSync(dirPath).indexOf(filename) !== -1;
};

/**
 * Write to stderr and exit(1) if condition is not truthy.
 * @param {*} condition 
 * @param {string=} message 
 */
const enforce = (condition, message) => {
  if (!condition) {
    console.error(`${message || "Fatal error"}. Exiting.`);
    process.exit(1);
  }
}

(async () => {
  const filename = process.argv[2];
  enforce(filename, "No input file specified");

  const parserName = process.argv[3];
  enforce(parserName, "No parser specified");
  enforce(fileExistsInDir(PARSERS_PATH, `${parserName}.js`), `Parser '${parserName}' not found`);

  const generatorName = process.argv[4];
  enforce(generatorName, "No generator specified");
  enforce(fileExistsInDir(GENERATORS_PATH, `${generatorName}.js`), `Generator '${generatorName}' not found`);

  let data;
  try {
    data = await promisify(fs.readFile)(path.resolve(__dirname, filename), { encoding: "utf-8" });
  } catch (err) {
    enforce(false, `Failed to read '${filename}'`);
  }
  const colors = require(`./parse/${parserName}`)(data);
  process.stdout.write(require(`./generate/${generatorName}`)(colors) + "\n");
  process.exit(0);
})();
