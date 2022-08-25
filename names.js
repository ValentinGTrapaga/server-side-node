const name1 = "John"
const SUPER_SECRET = "Valentin"

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

module.exports = sayHi // export default
//module.exports = {sayHi, name1} named export, can be destructured