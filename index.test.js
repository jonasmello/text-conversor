"use strict";

const chai = require("chai");
const expect = chai.expect;

const convertToCrazyText = require("./index").convertToCrazyText;

describe("A encoded text", function() {
  it("should encode the string e", function() {
    expect(convertToCrazyText("e")).to.equal("3");
  });
  it("should encode the string este", function() {
    expect(convertToCrazyText("este")).to.equal("35T3");
  });
  it("should encode the string pequeno", function() {
    expect(convertToCrazyText("pequeno")).to.equal("P3QU3N0");
  });
  it("should encode the string the first text", function() {
    const textToEncode =
      "este pequeno texto serve apenas para mostrar como nossa cabeça consegue fazer coisas impressionantes!";
    const encodedText =
      "35T3 P3QU3N0 T3XT0 53RV3 4P3N45 P4R4 M05TR4R C0M0 N0554 C4B3Ç4 C0N53GU3 F4Z3R C01545 1MPR35510N4NT35!";
    expect(convertToCrazyText(textToEncode)).to.equal(encodedText);
  });
  it("should encode the string the second text", function() {
    const textToEncode =
      "repare nisso! no começo estava meio complicado, mas nesta linha sua mente vai decifrando o código quase automaticamente, sem precisar pensar muito, certo?";
    const encodedText =
      "R3P4R3 N1550! N0 C0M3Ç0 35T4V4 M310 C0MPL1C4D0, M45 N35T4 L1NH4 5U4 M3NT3 V41 D3C1FR4ND0 0 C0D1G0 QU453 4UT0M4T1C4M3NT3, 53M PR3C154R P3N54R MU1T0, C3RT0?";
    expect(convertToCrazyText(textToEncode)).to.equal(encodedText);
  });
  it("should encode the string the full text", function() {
    const textToEncode =
      "este pequeno texto serve apenas para mostrar como nossa cabeça consegue fazer coisas impressionantes! repare nisso! no começo estava meio complicado, mas nesta linha sua mente vai decifrando o codigo quase automaticamente, sem precisar pensar muito, certo? pode ficar bem orgulhoso disso! sua capacidade merece parabens!";
    const encodedText =
      "35T3 P3QU3N0 T3XT0 53RV3 4P3N45 P4R4 M05TR4R C0M0 N0554 C4B3Ç4 C0N53GU3 F4Z3R C01545 1MPR35510N4NT35! R3P4R3 N1550! N0 C0M3Ç0 35T4V4 M310 C0MPL1C4D0, M45 N35T4 L1NH4 5U4 M3NT3 V41 D3C1FR4ND0 0 C0D1G0 QU453 4UT0M4T1C4M3NT3, 53M PR3C154R P3N54R MU1T0, C3RT0? P0D3 F1C4R B3M 0RGULH050 D1550! 5U4 C4P4C1D4D3 M3R3C3 P4R4B3N5!";
    expect(convertToCrazyText(textToEncode)).to.equal(encodedText);
  });
});
