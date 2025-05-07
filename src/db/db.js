const fs = require('fs');
const path = require('path');

const getDbPath = (filename) => path.join(__dirname, filename);

function readJson(file) {
  const filePath = getDbPath(file);
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function writeJson(file, data) {
  const filePath = getDbPath(file);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

module.exports = {
  readJson,
  writeJson
};
