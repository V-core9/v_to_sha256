const v_to_sha256 = require("../source");
var faker = require('faker');
const { notEmptySync } = require("v_is_empty_value");

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
      test(String(data), () => {
        var hashVal = v_to_sha256.sync(data);
        //? Check if hash is not false [that means it failed]
        if (notEmptySync(data)) {
          expect(hashVal !== false).toBe(true);
        } else {
          expect(hashVal).toBe(false);
        }
      });

    }
  });
});
