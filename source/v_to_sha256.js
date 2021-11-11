var crypto = require("crypto");
const hashType = "sha256";
const vHash = crypto.createHash(hashType);

const v_to_sha256 = (data) => {
  try {
    return vHash.update(data).digest("hex");
  } catch (error) {
    return false;
  }
};

module.exports = v_to_sha256;
