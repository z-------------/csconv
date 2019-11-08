const fs = require("fs");
const { promisify } = require("util");
const path = require("path");

const PARSERS_PATH = path.join(__dirname, "parse");
const GENERATORS_PATH = path.join(__dirname, "generate");

const fileExistsInDir = (dirPath, filename) => {
  return fs.readdirSync(dirPath).indexOf(filename) !== -1;
};

(async () => {
  const inPath = process.argv[2];
  if (!inPath) {
    console.error("No input file specified. Exiting.");
    process.exit(1);
  }

  const parserName = process.argv[3];
  if (!parserName) {
    console.error("No parser specified. Exiting.");
    process.exit(1);
  }
  if (!fileExistsInDir(PARSERS_PATH, `${parserName}.js`)) {
    console.error(`Parser '${parserName}' not found. Exiting.`);
    process.exit(1);
  }

  const generatorName = process.argv[4];
  if (!generatorName) {
    console.error("No generator specified. Exiting.");
    process.exit(1);
  }
  if (!fileExistsInDir(GENERATORS_PATH, `${generatorName}.js`)) {
    console.error(`Generator '${generatorName}' not found. Exiting.`);
    process.exit(1);
  }

  let data;
  try {
    data = await promisify(fs.readFile)(path.resolve(__dirname, inPath), { encoding: "utf-8" });
  } catch (err) {
    console.error(err); process.exit(1);
  }
  const colors = require(`./parse/${parserName}`)(data);
  process.stdout.write(require(`./generate/${generatorName}`)(colors) + "\n");
  process.exit(0);
})();
