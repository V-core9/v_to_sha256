const v_to_sha256 = require("../");

test("demo_password_123456", async () => {
  expect(await v_to_sha256("demo_password_123456")).toBe("4491875b6270ce2dd38068c03e1ce0251e06396cddb5fe87f51fe1024bfceb1a");
});

test("123456789", async () => {
  expect(await v_to_sha256("123456789")).toBe("15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225");
});

test("Batman Tanana", async () => {
  expect(await v_to_sha256("Batman Tanana")).toBe("fd3dbf58180ca44e5bf86b328d2377045242921e6710b25d8ed3e87edf404983");
});
