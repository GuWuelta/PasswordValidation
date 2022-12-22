//  Deve ser possível receber uma string que passará pelas seguintes validações:
//  [x] - A senha deve conter de 16 a 32 caracteres;
//  [x] - Deve conter pelo menos 2 caracteres especiais;
//  [x] - Deve conter letras maiúsculas;
//  [x] - Deve conter letras minúsculas;
//  [x] - Não pode conter mais de 3 sequencias de caracteres, letras ou números (abc ou 123, por exemplo).

const SPECIAL_CASES = "!@#$%^&*()-_]";
const UPPER_CASES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_CASES = "abcdefghijklmnopqrstuvwxyz";

class PasswordValidation {
  private PASSWORD: string;
  private PASSWORD_ARRAY: string[];

  constructor() {
    this.PASSWORD = "rZpy*D95&WBE'Z&B";
    this.PASSWORD_ARRAY = this.PASSWORD.split("");
  }

  validatePasswordLength(): boolean | string {
    if (this.PASSWORD.length >= 16 && this.PASSWORD.length <= 32) {
      return true;
    }
    return "Tamanho inválido!";
  }

  validateSpecialCases(): boolean | string {
    const specialCasesArray = SPECIAL_CASES.split("");
    const specialCasesIncluded = [];
    for (const specialCase of specialCasesArray) {
      for (const char of this.PASSWORD) {
        if (char === specialCase) {
          specialCasesIncluded.push(char);
        }
      }
    }
    if (specialCasesIncluded.length < 2) return "Faltam caractéres especiais!";

    return specialCasesIncluded.length >= 2;
  }

  toASCIICode() {
    return this.PASSWORD_ARRAY.map((char) => {
      return char.charCodeAt(0);
    });
  }

  validateUpperCases(codes_array: number[]): boolean | string {
    const upperCases = codes_array.reduce(
      (upperCases: number[], code: number) => {
        if (code >= 65 && code <= 90) {
          upperCases.push(code);
        }
        return upperCases;
      },
      []
    );
    if (upperCases.length < 1) {
      return "A senha deve conter ao menos uma letra maiúscula";
    }
    return true;
  }

  validateLowerCases(codes_array: number[]): boolean | string {
    const lowerCases = codes_array.reduce(
      (lowerCases: number[], code: number) => {
        if (code >= 97 && code <= 122) {
          lowerCases.push(code);
        }
        return lowerCases;
      },
      []
    );
    if (lowerCases.length < 1) {
      return "A senha deve conter ao menos uma letra maiúscula";
    }
    return true;
  }

  validateSequences(): boolean | string {
    let notHasSequence = true;
    const LOWER_CASE_PASSWORD = this.PASSWORD.toLowerCase();
    for (const char of LOWER_CASE_PASSWORD) {
      const CHAR_CODE = char.charCodeAt(0);
      const CHAR_INDEX = LOWER_CASE_PASSWORD.indexOf(char);
      const NEXT_TWO_CHARS = LOWER_CASE_PASSWORD.substring(
        CHAR_INDEX,
        CHAR_INDEX + 3
      );
      const IS_SEQUENCE = String.fromCharCode(
        CHAR_CODE,
        CHAR_CODE + 1,
        CHAR_CODE + 2
      );
      if (IS_SEQUENCE === NEXT_TWO_CHARS) {
        notHasSequence = false;
        return "Caractéres em sequência!";
      }
    }

    if (!notHasSequence) {
      return "Caractéres em sequência!";
    }

    return notHasSequence;
  }
}

const pl = new PasswordValidation();
const CODES_ARRAY = pl.toASCIICode();
console.log(pl.validatePasswordLength());
console.log(pl.validateSpecialCases());
console.log(pl.validateUpperCases(CODES_ARRAY));
console.log(pl.validateLowerCases(CODES_ARRAY));
console.log(pl.validateSequences());
