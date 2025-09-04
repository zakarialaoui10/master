import {writeFileSync, existsSync, mkdirSync} from 'fs'
const owner = process.env.OWNER;
const repo = process.env.REPO;
const BaseDir = process.cwd();
const custom = process.env.CUSTOM;


console.log({
    owner,
    repo,
    BaseDir,
    t : Date.now(),
    a : 0,
    custom
})

const path = './cache';

if (!existsSync(path)) {
  mkdirSync(path, { recursive: true });
}

writeFileSync('./cache/test.json', JSON.stringify({
    owner,
    repo,
    BaseDir,
    t : Date.now(),
    a : 0,
    custom
}));
