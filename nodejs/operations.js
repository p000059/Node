var sumFunc = require('./Operations/sum')
var subFunc = require('./Operations/subtraction')
var multFunc = require('./Operations/multiplication')
var divFunc = require('./Operations/division')
var divRFunc = require('./Operations/divisionWithRemainder')

console.log(`\nSum: ${sumFunc(23,27)} \nSubtraction: ${subFunc(100,25)} \nMultiplication: ${multFunc(9,9)} \nDivision: ${divFunc(50,2)} \nDivision Zero: ${divRFunc(10,3)}`)