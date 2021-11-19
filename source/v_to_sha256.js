var crypto = require("crypto");
const hashType = "sha256";
const digest = "hex";

var v_to_sha256 = (data) => {
  try {
    return crypto.createHash(hashType).update(data).digest(digest);    
  } catch (error) {
    return false;
  }
};

module.exports = v_to_sha256;
