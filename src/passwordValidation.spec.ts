import { PasswordValidation } from "./passwordValidation";

// toASCIICode TRUE: [] | FALSE: []

describe("PasswordValidation", () => {
  const plWithNoErrors = new PasswordValidation("rZpy*D95&WBE'Z&B");

  describe("validatePasswordLength", () => {
    const passwordLengthLessMin = new PasswordValidation("Gau74J^Zf6(>x4w");
    const passwordLengthMoreMax = new PasswordValidation(
      "Gau74J^Zf6(>x4Koka714j(((141jija*78712IAJdz"
    );

    it("should be able to validate if password's length is valid", () => {
      expect(plWithNoErrors.validatePasswordLength()).toEqual(true);
    });

    it("should be able to validate if password's length is less than 16 characters", () => {
      expect(passwordLengthLessMin.validatePasswordLength()).toEqual(
        "Tamanho inválido!"
      );
    });

    it("should be able to validate if password's length is more than 32 characters", () => {
      expect(passwordLengthMoreMax.validatePasswordLength()).toEqual(
        "Tamanho inválido!"
      );
    });
  });

  describe("validateSpecialCases", () => {
    it("should be able to validate if password has at least two special characters", () => {
      expect(plWithNoErrors.validateSpecialCases()).toEqual(true);
    });
    const passwordWithNoSpecialChars = new PasswordValidation(
      "dX5sWaY6tknDUHtL"
    );
    it("should be able to validate if password hasn't at least two special characters", () => {
      expect(passwordWithNoSpecialChars.validateSpecialCases()).toEqual(
        "Faltam caractéres especiais!"
      );
    });
  });

  describe("toASCIICode", () => {});

  describe("validateUpperCases", () => {
    it("should be able to validate if password has at least one upper case", () => {
      expect(plWithNoErrors.validateUpperCases()).toEqual(true);
    });
    const passwordWithNoUpperCase = new PasswordValidation(
      "d5sa6tkntasasasasas"
    );
    it("should be able to validate if password hasn't at least one upper case", () => {
      expect(passwordWithNoUpperCase.validateUpperCases()).toEqual(
        "A senha deve conter ao menos uma letra maiúscula"
      );
    });
  });

  describe("validateLowerCases", () => {
    it("should be able to validate if password has at least one lower case", () => {
      expect(plWithNoErrors.validateLowerCases()).toEqual(true);
    });
    const passwordWithNoLowerCase = new PasswordValidation("SASASASASA1213ASA");
    it("should be able to validate if password hasn't at least one lower case", () => {
      expect(passwordWithNoLowerCase.validateLowerCases()).toEqual(
        "A senha deve conter ao menos uma letra minúscula"
      );
    });
  });

  describe("validateSequences", () => {
    it("should be able to validate if password hasnt sequences of characters", () => {
      expect(plWithNoErrors.validateSequences()).toEqual(true);
    });
    const passwordWithSequenceLetters = new PasswordValidation(
      "rZpy*D95&WBE'Z&aBc"
    );
    it("should be able to validate if password has sequences of letters", () => {
      expect(passwordWithSequenceLetters.validateSequences()).toEqual(
        "Caractéres em sequência"
      );
    });
    const passwordWithSequenceNumbers = new PasswordValidation(
      "rZpy*D95&WBE'Z&123"
    );
    it("should be able to validate if password has sequences of numbers", () => {
      expect(passwordWithSequenceNumbers.validateSequences()).toEqual(
        "Caractéres em sequência"
      );
    });
  });

  describe("validatePassword", () => {
    it("should be able to validate if password is valid", () => {
      expect(plWithNoErrors.validatePassword()).toEqual(
        expect.objectContaining({
          result: true,
          errors: [],
        })
      );
    });
  });
});
