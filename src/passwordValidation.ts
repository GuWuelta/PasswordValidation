//  Deve ser possível receber uma string que passará pelas seguintes validações:
//  [x] - A senha deve conter de 16 a 32 caracteres;
//  [x] - Deve conter pelo menos 2 caracteres especiais;
//  [x] - Deve conter letras maiúsculas;
//  [x] - Não pode conter mais de 3 sequencias de caracteres, letras ou números (abc ou 123, por exemplo).

// Usar um array?
// const SPECIAL_CASES = "!@#$%^&*()-_]";

interface ResultObj {
  result: boolean;
  errors: string[];
}
export class PasswordValidation {
  private resultObj: ResultObj;
  private PASSWORD_ARRAY: string[];
  private asciiCodes: number[];
  private SPECIAL_CHARS: string[];
  private PASSWORD_MIN_LENGTH: number;
  private PASSWORD_MAX_LENGTH: number;
    static validatePasswordLength: any;

  constructor(private password: string) {
    this.resultObj = { result: true, errors: [] };
    this.PASSWORD_ARRAY = this.password.split("");
    this.asciiCodes = this.toASCIICode(this.PASSWORD_ARRAY);
    this.SPECIAL_CHARS = [
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
      "]",
    ];
    this.PASSWORD_MIN_LENGTH = 16;
    this.PASSWORD_MAX_LENGTH = 32;
  }

  validatePasswordLength(): boolean | string {
    return this.password.length >= this.PASSWORD_MIN_LENGTH &&
      this.password.length <= this.PASSWORD_MAX_LENGTH
      ? true
      : "Tamanho inválido!";
  }

  validateSpecialCases(): boolean | string {
    const specialCases = this.SPECIAL_CHARS.reduce(
      (specialCases: number, specialCase: string) => {
        this.PASSWORD_ARRAY.forEach((char) => {
          if (char === specialCase) specialCases++;
        });

        return specialCases;
      },
      0
    );
    return specialCases < 2 ? "Faltam caractéres especiais!" : true;
  }

  toASCIICode(password: string[]) {
    return password.map((char) => char.charCodeAt(0));
  }

  validateUpperCases(): boolean | string {
    const upperCases = this.asciiCodes.reduce(
      (upperCases: number, code: number) => {
        if (code >= 65 && code <= 90) upperCases++;
        return upperCases;
      },
      0
    );

    return upperCases < 1
      ? "A senha deve conter ao menos uma letra maiúscula"
      : true;
  }

  validateLowerCases(): boolean | string {
    const lowerCases = this.asciiCodes.reduce(
      (lowerCases: number, code: number) => {
        if (code >= 97 && code <= 122) lowerCases++;
        return lowerCases;
      },
      0
    );

    return lowerCases < 1
      ? "A senha deve conter ao menos uma letra minúscula"
      : true;
  }

  validateSequences(): boolean | string {
    const passwordInLowerCase = this.password.toLowerCase().split("");
    const asciiCodesArrayLowerCases = this.toASCIICode(passwordInLowerCase);
    let sequences = 0;
    asciiCodesArrayLowerCases.forEach((code: number, idx) => {
      if (
        code === asciiCodesArrayLowerCases[idx + 1] - 1 &&
        code === asciiCodesArrayLowerCases[idx + 2] - 2
      )
        sequences++;
    });

    return sequences === 0 ? true : "Caractéres em sequência";
  }

  validatePassword(): ResultObj {
    const isLengthValid = this.validatePasswordLength();
    if (typeof isLengthValid === "string") {
      this.resultObj.errors.push(isLengthValid);

      this.resultObj.result = false;
    }

    const hasSpecialCases = this.validateSpecialCases();
    if (typeof hasSpecialCases === "string") {
      this.resultObj.errors.push(hasSpecialCases);

      this.resultObj.result = false;
    }

    const hasUpperCase = this.validateUpperCases();
    if (typeof hasUpperCase === "string") {
      this.resultObj.errors.push(hasUpperCase);

      this.resultObj.result = false;
    }

    const hasLowerCase = this.validateLowerCases();
    if (typeof hasLowerCase === "string") {
      this.resultObj.errors.push(hasLowerCase);

      this.resultObj.result = false;
    }

    const hasSequences = this.validateSequences();
    if (typeof hasSequences === "string") {
      this.resultObj.errors.push(hasSequences);

      this.resultObj.result = false;
    }

    return this.resultObj;
  }
}

const pl = new PasswordValidation("rZpy*D95&WBE'Z&B");
console.log(pl.validatePassword());

// const SPECIAL_CHARS = ["!","@","#","$","%","^","&","*","(",")","-","_","]"];
