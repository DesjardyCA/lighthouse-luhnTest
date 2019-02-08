var assert = require("chai").assert;
var luhnTest = require("../luhn");

describe("luhn test", function () {
  it("should return true the cc num is valid", function () {
    var num = "79927398713";
    var result = luhnTest.check(num);
    assert.isTrue(result);
  });
  it("should return false the cc num is not valid", function () {
    var num = "7236100662";
    var result = luhnTest.check(num);
    assert.isFalse(result);
  });
});