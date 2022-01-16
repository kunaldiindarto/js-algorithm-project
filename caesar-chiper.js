function rot13(str) {
  const abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (abjad.indexOf(str[i]) === -1) {
      result += str[i];
    } else {
      let indexAwal = abjad.indexOf(str[i]);
      let indexAkhir = (indexAwal + 13) % 26;
      result += abjad[indexAkhir];
    }
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC"));
// console.log(rot13("SERR"));
