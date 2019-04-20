'use strict';

const Enums = require('./Enums');

class StageResults {
  constructor() {
    this.results = new Object();
  }

  addResult(result, count) {
    Enums.checkResultType(result)
    if (count < 0) throw new Error("Expected positive number");
    this.results[result] = count;
  }

  getResult(result) {
    Enums.checkResultType(result)
    const count = this.results[result];
    return count ? count : 0;
  }

  calculateScore(powerFactor, result) {
    var score = Enums.getResultScore(powerFactor, result);
    const r = score * this.getResult(result);
    return r;
  }

  calculateScores(powerFactor) {
    Enums.checkPowerFactorType(powerFactor);    
    return Math.max(Object.values(Enums.Results).reduce((acc, val) => acc + this.calculateScore(powerFactor, val), 0), 0);
  }

  calculateHitFactor(powerFactor, time) {
    Enums.checkPowerFactorType(powerFactor);
    const score = this.calculateScores(powerFactor);
    return score && time ? (score / time).toFixed(4) : 0;
  }
}

module.exports = StageResults;