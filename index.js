var fs = require('file-system')

let pathReplacer = (directory, search, partial) => {

    // Loop in the chosen directory and update the path with the right path.
    fs.recurse(directory, (filepath, relative, filename) => {
        if (filename) {
            let partialDepth = pathDepth(filepath)
            let pathToReplace = `'` + partialDepth + partial

            fs.readFile(filepath, (err, data) => {
                // Replace all the matches and write the file in the path.
                fs.writeFile(`dir/${filepath}`, data.toString().replace(new RegExp(search, "g"), pathToReplace))
            })
        } else {
            //
        }
    })

    /**
     * 
     * @param {string} sea tells how much deep is the file.
     */
    function pathDepth (sea) {
        const count = (sea.match(new RegExp("/", "g")) || []).length -1 

        const leaguesUnderTheSea = '../'
        let depthResult = ''

        if (!count) {
            return depthResult
        }

        for (let x = 0; x < count; x++) {
            depthResult += leaguesUnderTheSea
        }

        return depthResult
    }
}

module.exports = pathReplacer
