BELOW__TWENTY = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

TENTH__HUNDRED = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {

let result;
 
    if(number < 20){
        result = BELOW__TWENTY[number];
    } else if(number < 100 && number % 10 !== 0) {
        result = TENTH__HUNDRED [Math.floor(number / 10 % 10)] +' '+ BELOW__TWENTY[number%10];
    } else {
        result = TENTH__HUNDRED [number/10];
    } 
    
    if (number >=100 && number%100 === 0 ) {
        result = BELOW__TWENTY[number / 100] + ' hundred';
    } else if (number >=100 && number%100 < 20){
        result = BELOW__TWENTY[Math.floor(number / 100)] + ' hundred ' + BELOW__TWENTY[number%100];
    } else if (number >=100 && number%100 > 19 && number % 10 !==0){
        result = BELOW__TWENTY[Math.floor(number / 100)] + ' hundred ' + TENTH__HUNDRED[Math.floor((number%100)/10)] +' '+ BELOW__TWENTY[number% 10];
    } else if (number >=100 && number%100 > 19 && number % 10 ===0) {
        result = BELOW__TWENTY[Math.floor(number / 100)] + ' hundred ' + TENTH__HUNDRED[Math.floor((number%100)/10)];
    }
    return result;
    }
