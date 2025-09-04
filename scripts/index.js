import {writeFileSync, existsSync, mkdirSync} from 'fs'
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

if (!existsSync(path)) {
  mkdirSync(path, { recursive: true });
}

writeFileSync('./cache/test.json', JSON.stringify({
    owner,
    repo,
    BaseDir,
    a : 0
}));
