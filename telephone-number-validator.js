function telephoneCheck(str) {
  const rules = /^(1 ?)?(\d{3}|\(\d{3}\))[-\s]?(\d{3})[-\s]?(\d{4})$/;

  return rules.test(str);
}

console.log(telephoneCheck("5555555"));
