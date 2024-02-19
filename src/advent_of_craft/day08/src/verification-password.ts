// ?=.*[a-z] ---> has one lowercase
// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.*#@$%&])[A-Za-z\d.*#@$%&]{8,}$
const MIN_PASSWORD_LENGTH = 8;
const ACCEPTED_SPECIAL_CHARS = /[.*#@$%&]/;

export const verifyRegex = (password: string): boolean => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.*#@$%&])[A-Za-z\d.*#@$%&]{8,}$/.test(password);
}

export const verify = (password: string): boolean => {
  return (
    hasAtLeast8characters(password) &&
    hasAtLeastOneUpperCaseCharacter(password) &&
    hasAtLeastOneLowerCaseCharacter(password) &&
    hasAtLeastOneNumber(password) &&
    hasAtLeastOneAcceptedSpecialCharacter(password) &&
    hasAutorizedCharacters(password)
  );
};

function hasAtLeastOneUpperCaseCharacter(password: string): boolean {
  return /[A-Z]/.test(password);
}

function hasAtLeastOneLowerCaseCharacter(password: string): boolean {
  return /[a-z]/.test(password);
}

function hasAtLeastOneNumber(password: string): boolean {
  return /\d/.test(password);
}

function hasAtLeast8characters(password: string): boolean {
  return password.length >= MIN_PASSWORD_LENGTH;
}

function hasAtLeastOneAcceptedSpecialCharacter(password: string): boolean {
  return ACCEPTED_SPECIAL_CHARS.test(password);
}

function hasAutorizedCharacters(password: string): boolean {
  return /^[A-Za-z\d.*#@$%&]+$/.test(password);
}
