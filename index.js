
const returnFirstTwoDrivers=function(){
    let drivers=['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.splice(0,2)
    
}
const returnLastTwoDrivers=function(){
    let driver=['Antonia', 'Nuru', 'Amari', 'Mo']
    return driver.splice(2)
}
const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer){
 return function(fare){
    return fare * integer
 }
}
const fareDoubler=createFareMultiplier(2)

const fareTripler=createFareMultiplier(3)

function selectDifferentDrivers(drivers, fn) {
   
  return fn(drivers);

}


console.log(returnFirstTwoDrivers())
console.log(returnLastTwoDrivers())
console.log(selectingDrivers())
console.log(selectingDrivers([0]))
console.log(selectingDrivers([1]))
console.log(createFareMultiplier())
console.log(fareDoubler())
console.log(fareTripler())
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));