const csv = require('csvtojson')
const fs = require('fs')

const readStream = fs.createReadStream('./data/nodejs-hw1-ex1.csv')
const writeStream = fs.createWriteStream('./data/task2out.txt')

readStream
    .pipe(csv().on('data', (data) => console.log(`Row: ${data}`)))
    .on('error', (e) => console.log(`Error at read: ${e}`))
    .pipe(writeStream)
    .on('error', (e) => console.log(`Error at write: ${e}`))
