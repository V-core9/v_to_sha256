const v_to_sha256 = require("../");

test("01. timeNow  variable from date.now() ", async () => {
  var timeNow = Date.now();
  expect(v_to_sha256(timeNow)).toBe(v_to_sha256(timeNow));
});

test("02. generate new object date ", async () => {
  expect(v_to_sha256(new Date())).toBe(false);
});
