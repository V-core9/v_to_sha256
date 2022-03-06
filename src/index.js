var crypto = require("crypto");
const { notEmpty } = require("v_is_empty_value");

const v_to_sha256 = async (value = null) => {
  return (await notEmpty(value)) ? crypto.createHash("sha256").update(String(value)).digest("hex") : false;
};

module.exports = v_to_sha256;
