const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

rl.on('line', (line: string) => {
    console.log(line.split('').reverse().join(''))
})

rl.once('close', () => {
    // end of input
})
