const v_to_sha256 = require("../");

test("creates sha256 hash from string 'demo_password_123456' ", async () => {
  expect(await v_to_sha256("demo_password_123456")).toBe("4491875b6270ce2dd38068c03e1ce0251e06396cddb5fe87f51fe1024bfceb1a");
});

test("creates sha256 hash from string 'demo_password_123456' ", async () => {
  expect(await v_to_sha256()).toBe(false);
});

test("creates sha256 hash from string 'demo_password_123456' ", async () => {
  expect(await v_to_sha256("demo_password_123456")).toBe("4491875b6270ce2dd38068c03e1ce0251e06396cddb5fe87f51fe1024bfceb1a");
});
