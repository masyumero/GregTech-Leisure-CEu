const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
  console.error(`使用法: ${path.basename(process.argv[1])} <バージョン>`);
  process.exit(1);
}
const versionId = process.argv[2];

console.error("modrinth.index.jsonをロード");
const manifest = fs.readFileSync('modrinth.index.json', 'utf8');
const json = JSON.parse(manifest);
if (!json.versionId) {
  console.error('「versionId」がmodrinth.index.jsonに見つかりません');
  process.exit(1);
}
if (json.versionId === versionId) {
  console.error(`バージョンは既に「${versionId}」です`);
  process.exit(1);
}

console.error("変更を保存");
json.versionId = versionId;
fs.writeFileSync('modrinth.index.json', JSON.stringify(json));

console.log(`new_version=${versionId}`);
