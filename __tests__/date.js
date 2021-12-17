const v_to_sha256 = require("../");

test("01. timeNow  variable from date.now() ", async () => {
  var timeNow = Date.now();
  expect(await v_to_sha256(timeNow)).toBe(await v_to_sha256(timeNow));
});

test("02. generate new object date ", async () => {
  expect(await v_to_sha256(new Date())).toBe(false);
});
