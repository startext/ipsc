var Enums = require('../../src/Enums.js');
var StageResults = require('../../src/StageResults');

describe('Test stage results', () => {
  it('Valid results', () => {
    var results = new StageResults();
    expect(results.addResult(Enums.RESULT.A, 5));
    expect(results.getResult(Enums.RESULT.A)).toEqual(5);
    
    expect(results.getResult(Enums.RESULT.C)).toEqual(0);
    expect(results.getResult(Enums.RESULT.MISS)).toEqual(0);
  });

  it('Set invalid results', () => {
    var results = new StageResults();
    expect(function() { results.addResult(Enums.RESULT.B, 5) }).toThrow();
    expect(function() { results.addResult(null, 5) }).toThrow();
    expect(function() { results.addResult(undefined, 5) }).toThrow();
    expect(function() { results.addResult('C', 5) }).toThrow();
  });
});