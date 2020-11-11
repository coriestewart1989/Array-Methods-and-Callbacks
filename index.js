import { fifaData } from './fifa.js';




// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

//(b) Away Team name for 2014 world cup final

//(c) Home Team goals for 2014 world cup final

//(d) Away Team goals for 2014 world cup final

//(e) Winner of 2014 world cup final */
// let i;
console.log(fifaData.filter(game => game.Year === 2014).filter(game => game.Stage === "Final")[0]["Home Team Name"])
console.log(fifaData.filter(game => game.Year === 2014).filter(game => game.Stage === "Final")[0]["Away Team Name"])
console.log(fifaData.filter(game => game.Year === 2014).filter(game => game.Stage === "Final")[0]["Home Team Goals"])
console.log(fifaData.filter(game => game.Year === 2014).filter(game => game.Stage === "Final")[0]["Away Team Goals"])
console.log(fifaData.filter(game => game.Year === 2014).filter(game => game.Stage === "Final")[0]["Win conditions"])

// console.log(fifaData.filter(game => game.Year === 2014).map((game, idx) => {
//     if (game.Stage === "Final") {
//         i = idx
//         return game["Away Team Name"]
//     }
// })[i])

// console.log(getFinals(fifaData).map(game => 1))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(arr) {
    return arr.filter(data => data.Stage === "Final")
}
getFinals(fifaData)

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data) {
    let years = data.map(yearObj => yearObj.Year)
    return years

}

getYears(getFinals(fifaData))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(data) {
    let newArr = data.map(arrObj => {
        if (arrObj["Home Team Goals"] > arrObj["Away Team Goals"]) {
            return (arrObj["Home Team Name"])
        } else if (arrObj["Home Team Goals"] < arrObj["Away Team Goals"]) {
            return (arrObj["Away Team Name"])
        } else {
            return (arrObj["Win conditions"])
        }
    })
    return newArr
}
getWinners(getFinals(fifaData))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners2, getYears2) {
    const getWinner = []
    for (let i = 0; i < getWinners2.length; i++) {
        getWinner.push(`In ${getYears2[i]}, ${getWinners2[i]} won the world cup!`)
    }
    return getWinner
}
getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals( /* code here */ ) {
//     /* code here */
// }


function getAverageGoals(data) {
    const homeAvg = data.map((element) => element["Home Team Goals"])
    const awayAvg = data.map((element) => element["Away Team Goals"])
    return `Home Team Average: ${homeAvg.reduce((a,b)=> a+b) / homeAvg.length} Away Team Average;${awayAvg.reduce((a,b) => a+b) / awayAvg.length}`
}
getAverageGoals(fifaData)



/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

// function getCountryWins( /* code here */ ) {

//     /* code here */

// }



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

// function getGoals( /* code here */ ) {

//     /* code here */

// }


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

// function badDefense( /* code here */ ) {

//     /* code here */

// }


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
    console.log('its working');
    return 'bar';
}
export default {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}