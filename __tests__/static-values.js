const v_to_sha256 = require("../");



//! GENERAL
test("creates sha256 hash from string 'demo_password_123456' ", async () => {
  expect(await v_to_sha256("demo_password_123456")).toBe("4491875b6270ce2dd38068c03e1ce0251e06396cddb5fe87f51fe1024bfceb1a");
});

test("creates sha256 hash from string 'demo_password_123456' ", async () => {
  expect(await v_to_sha256()).toBe(false);
});

test("creates sha256 hash from string 'demo_password_123456' ", async () => {
  expect(await v_to_sha256("demo_password_123456")).toBe("4491875b6270ce2dd38068c03e1ce0251e06396cddb5fe87f51fe1024bfceb1a");
});



//! BOOL
test("Send boolean [true]", async () => {
  expect(await v_to_sha256(true)).toBe("b5bea41b6c623f7c09f1bf24dcae58ebab3c0cdd90ad966bc43a45b44867e12b");
});

test("Send boolean [false]", async () => {
  expect(await v_to_sha256(false)).toBe("fcbcf165908dd18a9e49f7ff27810176db8e9f63b4352213741664245224f8aa");
});


//! DATE
test("timeNow  variable from date.now() ", async () => {
  var timeNow = Date.now();
  expect(await v_to_sha256(timeNow)).toBe(await v_to_sha256(timeNow));
});

test("generate new object date ", async () => {
  var date = new Date();
  expect(await v_to_sha256(date) !== false).toBe(true);
});


//! NUMBER
test("123456789", async () => {
  expect(await v_to_sha256(123456789)).toBe("15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225");
});

test("256755", async () => {
  expect(await v_to_sha256(256755)).toBe("6837eb215bac31f9cfbd7f45a009d8535b4c889421d8567b5cb8f482c9f5cd1c");
});

test("8541236987745", async () => {
  expect(await v_to_sha256(8541236987745)).toBe("5f491b6e42b79a7fca5a329dda6a2063f05143dd1df1d26389e775e15b043b25");
});


//! STRING
test("demo_password_123456", async () => {
  expect(await v_to_sha256("demo_password_123456")).toBe("4491875b6270ce2dd38068c03e1ce0251e06396cddb5fe87f51fe1024bfceb1a");
});

test("123456789", async () => {
  expect(await v_to_sha256("123456789")).toBe("15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225");
});

test("Batman Tanana", async () => {
  expect(await v_to_sha256("Batman Tanana")).toBe("fd3dbf58180ca44e5bf86b328d2377045242921e6710b25d8ed3e87edf404983");
});
