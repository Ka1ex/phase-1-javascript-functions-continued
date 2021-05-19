// Your code here
function saturdayFun(whatADay="roller-skate"){
 return `This Saturday, I want to ${whatADay}!`
}
function mondayWork(onMonday="go to the office"){
    return `This Monday, I will ${onMonday}.`
}
function wrapAdjective(maybe="*"){
 return function(feelingGood){
     return `You are ${maybe}${feelingGood}${maybe}!`
 }
}