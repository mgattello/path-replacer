# path-replacer
Replace matched values with a chosen path and reconstruct the dependencies of all files.

## How to install it

`git clone git@github.com:mgattello/path-replacer.git`
or
`npm install path-replacer`


## How does it work?

The `pathReplacer` function must be called with all the args.
- `dir` is the name of the directory that the code will use to find the matches.
- `search` is the string that the code will search throughout all directory. In order to search correctly all the dependencies, the variable string must contain the ' as first char.
- `partial` is the string that will replace all the matches.
The module will look at the depth of the file and reconstruct the full path automatically with the partial. All matches will be replaced with the full path, i.e.:

```
'/src/config/' (partial)
'../../../src/config/' (full path)
```

## How to use it?

```javascript
const pr = require('path-replacer')

var dir = 'dir/example'
var search = `'@module/`
var partial = 'src/services/'

pr(dir, search, partial)
```
