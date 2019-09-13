function convertToCrazyText(textToEncode) {
  const keys = [
    { index: "e", value: "3" },
    { index: "é", value: "3" },
    { index: "s", value: "5" },
    { index: "o", value: "0" },
    { index: "ó", value: "0" },
    { index: "s", value: "5" },
    { index: "a", value: "4" },
    { index: "á", value: "4" },
    { index: "i", value: "1" },
    { index: "í", value: "1" }
  ];
  let encodedText = textToEncode.toLowerCase();
  keys.map(v => {
    const regex = new RegExp(v.index, "g");
    return (encodedText = encodedText.replace(regex, v.value));
  });

  return encodedText.toUpperCase();
}

module.exports = {
  convertToCrazyText
};
