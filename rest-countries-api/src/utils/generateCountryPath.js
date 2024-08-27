export const generateCountryPath = (countryName) => {
  return `/countrie/${countryName
    .toLowerCase()
    .replaceWhitespaceWithHyphen()
    .removeAllSymbol()}`;
};

String.prototype.replaceWhitespaceWithHyphen = function () {
  return this.replace(/\s/g, "-");
};

String.prototype.removeAllSymbol = function () {
  return this.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
};
