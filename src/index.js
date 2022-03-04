var crypto = require("crypto");

var v_to_sha256 = async (value) => {
  return new Promise((resolve, reject) => {
    try {
      resolve((value !== undefined) ? crypto.createHash("sha256").update(String(value)).digest("hex") : false);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = v_to_sha256;
