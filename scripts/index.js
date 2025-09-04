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

writeFileSync('test.txt',"Test")
