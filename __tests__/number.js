const v_to_sha256 = require("../");

test("123456789", async () => {
  expect(v_to_sha256(123456789)).toBe("15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225");
});

test("256755", async () => {
  expect(v_to_sha256(256755)).toBe("6837eb215bac31f9cfbd7f45a009d8535b4c889421d8567b5cb8f482c9f5cd1c");
});

test("8541236987745", async () => {
  expect(v_to_sha256(8541236987745)).toBe("5f491b6e42b79a7fca5a329dda6a2063f05143dd1df1d26389e775e15b043b25");
});
