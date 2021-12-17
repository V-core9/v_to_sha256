const v_to_sha256 = require("../");

test("Send boolean [true]", async () => {
  expect(await v_to_sha256(true)).toBe(false);
});

test("Send boolean [false]", async () => {
  expect(await v_to_sha256(false)).toBe(false);
});
