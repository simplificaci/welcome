const fs = require("fs");
const messageFile = process.env.HUSKY_GIT_PARAMS;
const message = fs.readFileSync(messageFile, { encoding: "utf-8" });

test(`Deve iniciar com [Add, Change ou Fix]`, () => { 
  const checkTypes = () => {
    return (
      message.startsWith("Add: ") ||
      message.startsWith("Change: ") ||
      message.startsWith("Fix: ")
    );
  };
  expect(checkTypes()).toBeTruthy();
});
