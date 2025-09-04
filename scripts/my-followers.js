import fs from 'fs'
import path from "path";
import { fileURLToPath } from "url";
// import 'dotenv/config'

import {list_of_followers} from '../packages/npm/src/functions/list_of_followers.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file_path = path.join(__dirname,'../data', 'followers.json')

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

console.log(GITHUB_TOKEN)
// const my_followers = await list_of_followers('zakarialaoui10', GITHUB_TOKEN)

// // console.log(my_followers.length)

// fs.writeFileSync(file_path, JSON.stringify(my_followers, null, 2))
