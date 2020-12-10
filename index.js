var readlineSync = require("readline-sync");
const chalk = require('chalk');
var score=0;


var username =readlineSync.question(chalk.cyan.bold("What's your name? "));

console.log(chalk.yellow.underline(" Welcome " + username + " , so do you want to know if the year you were born in is a leap year?"));

function checkLeapYear(year)
{
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(chalk.green.bgBlackBright(year + ' is a leap year'));
    } else {
        console.log(chalk.red(year + ' is not a leap year'));
    }
}

const year = prompt(chalk.green.bold('Enter a year:'));

checkLeapYear(year);