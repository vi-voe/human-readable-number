const nameDigit = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion '

}
module.exports = function toReadable (number) {
  if(number < 21) return nameDigit[number];

  let numToArr = Array.from(number.toString());
  let string = '';
  let counter;
  let prev;
  numToArr.reverse().forEach(function (el, index) {
    // единицы
    if(counter == undefined) {
      counter = '0';
      prev = el;
      if(el==0) return
      string = nameDigit[el];
    } else if(counter == '0') {
      // десятки
      if(string.length>0) {
        if(el == 1) {
          string = nameDigit[1+prev];
        } else if (el == 0) {

        } else {
          string = nameDigit[el+counter] + ' ' + string;
        }
      } else if(el != 0) {
        string = nameDigit[el+counter]; 
      }
      counter+='0'
    } else {
      // сотни
      if(string.length>0) {
        string = `${nameDigit[el]} ` + nameDigit[100] + ' ' + string;
      } else {
        string = `${nameDigit[el]} ` + nameDigit[100];
      }
    }
  });
  return string;
}