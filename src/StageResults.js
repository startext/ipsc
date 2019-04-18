var Enums = require('./Enums');

class StageResults {
  constructor() {
    this.results = new Object();
  }

  checkResultType(result) {
    if (!Enums.isResult(result))
      throw new TypeError("Expected result instead of " + result);
  }

  addResult(result, count) {
    this.checkResultType(result)
    if (count < 0) throw new Error("Expected positive number");
    this.results[result] = count;
  }

  getResult(result) {
    this.checkResultType(result)
    const count = this.results[result];
    return count ? count : 0;
  }
}

module.exports = StageResults;