// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar){
    return `${(dollar)*156.5} yen`
}
function fromEuroToDollar(euro){
    return `${euro/1.07} dollar`
}
function fromYenToPound(yen){
    return `${((yen)/156.5)*0.87} pound`
}

// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar }