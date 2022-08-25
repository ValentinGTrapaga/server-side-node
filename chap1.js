// GLOBALS

// __dirname - path to current dir
// __filename
// require - function to use modules (CommonJS)
// module - info about current module (file)
// Every file is a module
// process - info about env where the program is being executed

/* setTimeout(() => {
    console.log(__filename)
}, 5000)
 */

// Modules

const sayHi = require('./names');

sayHi("John")