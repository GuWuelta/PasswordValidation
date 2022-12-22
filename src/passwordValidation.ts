//  Deve ser possível receber uma string que passará pelas seguintes validações:
//  [x] - A senha deve conter de 16 a 32 caracteres;
//  [x] - Deve conter pelo menos 2 caracteres especiais;
//  [x] - Deve conter letras maiúsculas;
//  [x] - Deve conter letras minúsculas;
//  [] - Não pode conter mais de 3 sequencias de caracteres, letras ou números (abc ou 123, por exemplo).

const PASSWORD: string = "1234567891AbCd@!";
const SPECIAL_CASES = "!@#$%^&*()-_]";
const UPPER_CASES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_CASES = "abcdefghijklmnopqrstuvwxyz";

class PasswordValidation {
  private PASSWORD: string;

  constructor() {
    this.PASSWORD = PASSWORD;
  }

  validatePasswordLength(password: string): boolean {
    return password.length >= 16 && password.length <= 32;
  }

  validateSpecialCases(password: string): boolean {
    const specialCasesArray = SPECIAL_CASES.split("");
    const specialCasesIncluded = [];
    for (const specialCase of specialCasesArray) {
      for (const char of password) {
        if (char === specialCase) {
          specialCasesIncluded.push(char);
        }
      }
    }
    return specialCasesIncluded.length >= 2;
  }

  validateUpperCases(password: string) {
    let hasUpperCase = false;
    const upperCasesArray = UPPER_CASES.split("");
    for (const letter of upperCasesArray) {
      if (password.includes(letter)) {
        hasUpperCase = true;
      }
    }
    return hasUpperCase;
  }

  validateLowerCases(password: string) {
    let hasLowerCase = false;
    const lowerCasesArray = LOWER_CASES.split("");
    for (const letter of lowerCasesArray) {
      if (password.includes(letter)) {
        hasLowerCase = true;
      }
    }
    return hasLowerCase;
  }
}

const pl = new PasswordValidation();
console.log(pl.validatePasswordLength(PASSWORD));
console.log(pl.validateSpecialCases(PASSWORD));
console.log(pl.validateUpperCases(PASSWORD));
console.log(pl.validateLowerCases(PASSWORD));
