const validator = require("validator");

const email = "hansikha@gmail.com";

if (validator.isEmail(email)) {
  console.log(`${email} is a valid email address.`);
} else {
  console.log(`${email} is not a valid email address.`);
}
