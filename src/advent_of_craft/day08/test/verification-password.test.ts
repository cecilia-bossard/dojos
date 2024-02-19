import { verify, verifyRegex } from "../src/verification-password";

const truthy = [["PaSSW0RD&"]];

const falsy = [
  ["should return false when the password has less than 8 chars", "Pa0RD&"],
  ["should return false when the password empty", ""],
  [
    "should return false if password do not contains at least one capital letter",
    "passw0rd&",
  ],
  [
    "should return false if password do not contains at least one lowercase letter",
    "PASSW0RD&",
  ],
  [
    "should return false if password do not contains at least one number",
    "PaSSWORD&",
  ],
  [
    "should return false if password do not contains at least one of the accepted special chars",
    "PaSSW0RD",
  ],
  [
    "should return false if password contains an unautorized character",
    "PaSSW0RD&!",
  ],
];

describe("password verification", () => {
  test.each(truthy)("is parameter a string", (password) => {
    expect(verify(password)).toBeTruthy();
  });

  test.each(falsy)("%p", (_, password) => {
    expect(verify(password)).toBeFalsy();
  });
});

describe("password verification regex", () => {
  test.each(truthy)("is parameter a string", (password) => {
    expect(verifyRegex(password)).toBeTruthy();
  });

  test.each(falsy)("%p", (_, password) => {
    expect(verifyRegex(password)).toBeFalsy();
  });
});
