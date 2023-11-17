const flavor = window.prompt("Enter the flavors of your Froyo here, each flavor must be seperated by a comma!", " vanilla,vanilla,vanilla,strawberry,coffee,coffee")
const flavorArr = flavor.split(',')
const result = countFlav(flavorArr)
// the log below will run the string in the console
console.log(flavorArr)


// The function below will with the help of a loop, 
// get the number of flavors based on user input and 
// keep accutarte accounting of the number of each flavor (objects).
function countFlav(flavorArr){
    const flavCount = {};
    
    for ( let i = 0; i < flavorArr.length; i++) {
        const flavor = flavorArr[i];

        if (flavCount[flavor] === undefined) {
        flavCount[flavor]= 0;
    }
    flavCount[flavor]++
}
return flavCount
}














