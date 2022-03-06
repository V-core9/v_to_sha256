const v_to_sha256 = require("../");
var faker = require('faker');
const { notEmpty } = require("v_is_empty_value");

var fakerTypes = Object.keys(faker);
fakerTypes.forEach(function (type) {
  var fakerInner = Object.keys(faker[type]);
  fakerInner.forEach(function (inner) {
    if (typeof faker[type][inner] === 'function') {

      //? Create data variable and try to get some data into it.
      var data = null;
      try {
        data = faker[type][inner]();
      } catch (e) {
        //console.log(e);
      }

      //! Run test if data gets created
        test(String(data), async () => {
          var hashVal = await v_to_sha256(data);
          //? Check if hash is not false [that means it failed]
          if (await notEmpty(data)) {
            expect(hashVal !== false).toBe(true);
          } else {
            expect(hashVal).toBe(false);
          }
        });

    }
  });
});
