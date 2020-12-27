# map

![version](https://img.shields.io/github/package-json/v/117/map?color=196DFF&style=flat-square)
![language](https://img.shields.io/github/languages/code-size/117/map?color=F1A42E&style=flat-square)
![build](https://img.shields.io/github/workflow/status/117/map/test?style=flat-square)
![prettier](https://img.shields.io/static/v1?label=code%20style&message=prettier&color=ff51bc&style=flat-square)

Fast file extension mapping with deep reference replacement.

## Contents

- [Features](#features)
- [Install](#install)
- [Example](#example)
- [Contributing](#contributing)

## Features

- [x] Fast, recursive.
- [x] Replace file extensions.

## Install

From NPM:

```terminal
$ npm i -g @master-chief/map
```

## Example

Assuming the contents of `folder` is as follows.

```terminal
$ ls folder
a.js
b.js
c.js
```

You can use the `map` command to replace the `.js` extension and it's references
within the files.

```terminal
$ map folder js cjs
```

Now the extensions have been mapped to `.cjs` (easy right? 🙂).

```terminal
$ ls folder
a.cjs
b.cjs
c.cjs
```

## Contributing

Feel free to contribute and PR to your 💖's content.
