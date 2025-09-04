import {writeFileSync} from 'fs'
const owner = process.env.OWNER;
const repo = process.env.REPO;
const BaseDir = process.cwd();


console.log({
    owner,
    repo,
    BaseDir,
    a : 0
})

const path = './cache';

if (!fs.existsSync(path)) {
  fs.mkdirSync(path, { recursive: true });
}

fs.writeFileSync('./cache/test.json', JSON.stringify({
    owner,
    repo,
    BaseDir,
    a : 0
}));
