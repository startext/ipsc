var Enums = require('./Enums');
var Functions = require('./Functions');

class StageResults {
  constructor() {
    this.results = new Object();
  }

  addResult(result, count) {
    Functions.checkResultType(result)
    if (count < 0) throw new Error("Expected positive number");
    this.results[result] = count;
  }

  getResult(result) {
    Functions.checkResultType(result)
    const count = this.results[result];
    return count ? count : 0;
  }

  calculateScore(factor, result) {
    var score = Functions.getResultScore(factor, result);
    const r = score * this.getResult(result);
    // console.log("factor:", factor, "result:", result, "result:", r)
    return r;
  }

  calculateScores(factor) {
    Functions.checkPowerFactorType(factor);
    // console.log("Result A:", this.getResult(Enums.RESULT.A));
    // console.log("Result C:", this.getResult(Enums.RESULT.C));
    // console.log("Result D:", this.getResult(Enums.RESULT.D));
    // console.log("Result NS:", this.getResult(Enums.RESULT.NS));

    // console.log("Results:", this.results);
    // console.log("Keys:", Object.keys(this.results));
    // console.log("Values:", Object.values(this.results));
    
    return Math.max(Object.values(Enums.RESULT).reduce((acc, val) => {
      acc += this.calculateScore(factor, val);
      return acc;
    }, 0), 0);    
  }
}

module.exports = StageResults;