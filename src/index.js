var crypto = require("crypto");

const hashType = "sha256";
const digest = "hex";

var v_to_sha256 = async (value) => {
  try {
    if (typeof value === "number") value = String(value);
    return crypto.createHash(hashType).update(value).digest(digest);    
  } catch (error) {
    return false;
  }
};

module.exports = v_to_sha256;
