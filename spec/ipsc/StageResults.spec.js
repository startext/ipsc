'use stricts';

var { Enums, StageResults, Functions } = require('../../src');

describe('Test stage results', () => {
  it('Valid results', () => {
    var results = new StageResults();
    
    expect(results.addResult(Enums.Results.A, 5));
    expect(results.getResult(Enums.Results.A)).toEqual(5);
    
    expect(results.getResult(Enums.Results.C)).toEqual(0);
    expect(results.getResult(Enums.Results.MISS)).toEqual(0);
  })

  it('Set invalid results', () => {
    var results = new StageResults();
    expect(function() { results.addResult(Results.B, 5) }).toThrow();
    expect(function() { results.addResult(null, 5) }).toThrow();
    expect(function() { results.addResult(undefined, 5) }).toThrow();
    expect(function() { results.addResult('C', 5) }).toThrow();
  })

  it('Calculate score', () => {
    var results = new StageResults();
    results.addResult(Enums.Results.A, 5);
    results.addResult(Enums.Results.C, 3);
    results.addResult(Enums.Results.D, 1);
    results.addResult(Enums.Results.NS, 1);

    expect(results.calculateScore(Enums.PowerFactors.MINOR, Enums.Results.A)).toEqual(25);
    expect(results.calculateScore(Enums.PowerFactors.MINOR, Enums.Results.C)).toEqual(9);
    expect(results.calculateScore(Enums.PowerFactors.MINOR, Enums.Results.D)).toEqual(1);
    expect(results.calculateScores(Enums.PowerFactors.MINOR)).toEqual(25);

    expect(results.calculateScore(Enums.PowerFactors.MAJOR, Enums.Results.A)).toEqual(25);
    expect(results.calculateScore(Enums.PowerFactors.MAJOR, Enums.Results.C)).toEqual(12);
    expect(results.calculateScore(Enums.PowerFactors.MAJOR, Enums.Results.D)).toEqual(2);
    expect(results.calculateScores(Enums.PowerFactors.MAJOR)).toEqual(29);
  })

  it('Calculate score - bad result', () => {
    var results = new StageResults();
    results.addResult(Enums.Results.A, 1);
    results.addResult(Enums.Results.C, 4);
    results.addResult(Enums.Results.D, 3);
    results.addResult(Enums.Results.NS, 1);
    results.addResult(Enums.Results.MISS, 1);

    expect(results.calculateScores(Enums.PowerFactors.MINOR)).toEqual(0);
    expect(results.calculateScores(Enums.PowerFactors.MAJOR)).toEqual(7);
  })

  it('Calculate hit factor', () => {
    var results = new StageResults();
    results.addResult(Enums.Results.A, 5);
    results.addResult(Enums.Results.C, 3);
    results.addResult(Enums.Results.D, 1);
    results.addResult(Enums.Results.NS, 1);

    expect(results.calculateHitFactor(Enums.PowerFactors.MINOR, 5)).toEqual((5.).toFixed(4));
    expect(results.calculateHitFactor(Enums.PowerFactors.MAJOR, 5.8)).toEqual((5.).toFixed(4));
  })
});