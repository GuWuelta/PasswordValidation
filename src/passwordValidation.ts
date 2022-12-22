//  Deve ser possível receber uma string que passará pelas seguintes validações:
//  [x] - A senha deve conter de 16 a 32 caracteres;
//  [x] - Deve conter pelo menos 2 caracteres especiais;
//  [] - Deve conter letras maiúsculas e minúsculas;
//  [] - Não pode conter mais de 3 sequencias de caracteres, letras ou números (abc ou 123, por exemplo).

const password: string = "1234567891AbCd@!";
class PasswordValidation {
  private password: string;

  constructor() {
    this.password = password;
  }

  validatePasswordLength(password: string): boolean {
    return password.length >= 16 && password.length <= 32;
  }

  validateSpecialChars(password: string): boolean {
    const SpecialChars = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
    ];
    const SpecialCharsArray = [];
    for (const specialchar of SpecialChars) {
      for (const char of password) {
        if (char === specialchar) {
          SpecialCharsArray.push(char);
        }
      }
    }
    return SpecialCharsArray.length >= 2;
  }
}

// const pl = new PasswordValidation();
// console.log(pl.validatePasswordLength(password));
// console.log(pl.validateSpecialChars(password));
