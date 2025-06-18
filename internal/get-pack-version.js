const fs = require('fs');

const manifest = fs.readFileSync('modrinth.index.json', 'utf8');
const json = JSON.parse(manifest);
console.log(`version=${json.versionID}`);
