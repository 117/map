#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
const args = process.argv.slice(2);
if (args.length != 3) {
    throw 'not enough arguments';
}
walk(`./${args[0]}`, (file) => {
    path.extname(file) == `.${args[1]}` &&
        fs.renameSync(file, (file = file.split('.').slice(0, -1).concat(args[2]).join('.')));
    fs.writeFileSync(file, fs
        .readFileSync(file, 'utf8')
        .toString()
        .replace(new RegExp(`((\"|')[a-zA-Z0-9-\/.]+)\.${args[1]}(\"|')`, 'gm'), `$1.${args[2]}$2`), 'utf8');
});
function walk(directory, callback) {
    fs.readdir(directory, (error, files) => {
        if (error) {
            throw error;
        }
        files.forEach((pathToFile) => fs.stat((pathToFile = path.join(directory, pathToFile)), (error, stats) => stats.isDirectory()
            ? walk(pathToFile, callback)
            : callback(pathToFile, stats)));
    });
}
