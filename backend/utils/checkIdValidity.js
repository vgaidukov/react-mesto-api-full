const checkIdValidity = (id) => {
  if (!id.match(/^[0-9a-fA-F]{24}$/i)) {
    return false;
  }
  return true;
};

module.exports = { checkIdValidity };
