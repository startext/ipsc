var Enums = require('../../src/Enums');
var IPSC = require('../../src/index');
var StageResults = require('../../src/StageResults');

describe('Test stage results', () => {
  it('Valid results', () => {
    var results = new StageResults();
    expect(results.addResult(Enums.RESULT.A, 5));
    expect(results.getResult(Enums.RESULT.A)).toEqual(5);
    
    expect(results.getResult(Enums.RESULT.C)).toEqual(0);
    expect(results.getResult(Enums.RESULT.MISS)).toEqual(0);
  })

  it('Set invalid results', () => {
    var results = new StageResults();
    expect(function() { results.addResult(Enums.RESULT.B, 5) }).toThrow();
    expect(function() { results.addResult(null, 5) }).toThrow();
    expect(function() { results.addResult(undefined, 5) }).toThrow();
    expect(function() { results.addResult('C', 5) }).toThrow();
  })

  it('Calculate score', () => {
    var results = new StageResults();
    results.addResult(IPSC.Enums.RESULT.A, 5);
    results.addResult(IPSC.Enums.RESULT.C, 3);
    results.addResult(IPSC.Enums.RESULT.D, 1);
    results.addResult(IPSC.Enums.RESULT.NS, 1);

    expect(results.calculateScore(IPSC.Enums.POWER_FACTOR.MINOR, IPSC.Enums.RESULT.A)).toEqual(25);
    expect(results.calculateScore(IPSC.Enums.POWER_FACTOR.MINOR, IPSC.Enums.RESULT.C)).toEqual(9);
    expect(results.calculateScore(IPSC.Enums.POWER_FACTOR.MINOR, IPSC.Enums.RESULT.D)).toEqual(1);

    expect(results.calculateScore(IPSC.Enums.POWER_FACTOR.MAJOR, IPSC.Enums.RESULT.A)).toEqual(25);
    expect(results.calculateScore(IPSC.Enums.POWER_FACTOR.MAJOR, IPSC.Enums.RESULT.C)).toEqual(12);
    expect(results.calculateScore(IPSC.Enums.POWER_FACTOR.MAJOR, IPSC.Enums.RESULT.D)).toEqual(2);

    expect(results.calculateScores(IPSC.Enums.POWER_FACTOR.MINOR)).toEqual(25);
  })
});