var crypto = require("crypto");
const { notEmpty, notEmptySync } = require("v_is_empty_value");

function createSHA256(value) {
  return crypto.createHash("sha256").update(String(value)).digest("hex");
}

const v_to_sha256 = async (value = null) => {
  return (await notEmpty(value)) ? createSHA256(value) : false;
};

v_to_sha256.sync = function (value = null) {
  return (notEmptySync(value)) ? createSHA256(value) : false;
};

module.exports = v_to_sha256;
module.exports.default = v_to_sha256;
