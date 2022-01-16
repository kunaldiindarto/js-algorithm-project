// *cara barbar
// function convertToRoman(num) {
//   let result = "";
//   while (num > 0) {
//     if (num < 4) {
//       result += "I";
//       num -= 1;
//     } else if (num >= 4 && num < 5) {
//       result += "IV";
//       num -= 4;
//     } else if (num >= 5 && num < 9) {
//       result += "V";
//       num -= 5;
//     } else if (num >= 9 && num < 10) {
//       result += "IX";
//       num -= 9;
//     } else if (num >= 10 && num < 40) {
//       result += "X";
//       num -= 10;
//     } else if (num >= 40 && num < 50) {
//       result += "XL";
//       num -= 40;
//     } else if (num >= 50 && num < 90) {
//       result += "L";
//       num -= 50;
//     } else if (num >= 90 && num < 100) {
//       result += "XC";
//       num -= 90;
//     } else if (num >= 100 && num < 400) {
//       result += "C";
//       num -= 100;
//     } else if (num >= 400 && num < 500) {
//       result += "CD";
//       num -= 400;
//     } else if (num >= 500 && num < 900) {
//       result += "D";
//       num -= 500;
//     } else if (num >= 900 && num < 1000) {
//       result += "CM";
//       num -= 900;
//     } else if (num >= 1000) {
//       result += "M";
//       num -= 1000;
//     }
//   }
//   return result;
// }

function convertToRoman(num) {
  const rumusRomawi = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  const keys = Object.keys(rumusRomawi).reverse();
  let result = "";

  keys.forEach((key) => {
    while (key <= num) {
      result += rumusRomawi[key];
      num -= key;
    }
  });

  return result;
}

console.log(convertToRoman(22));
