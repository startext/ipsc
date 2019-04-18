var Enums = require('../../src/Enums.js');
var Functions = require('../../src/Functions.js');

describe('Test IPSC scores', () => {
  it('Valid scores', () => {
    expect(Functions.getResultScore(Enums.POWER_FACTOR.MINOR, Enums.RESULT.A)).toEqual(5);
    expect(Functions.getResultScore(Enums.POWER_FACTOR.MINOR, Enums.RESULT.C)).toEqual(3);
    expect(Functions.getResultScore(Enums.POWER_FACTOR.MINOR, Enums.RESULT.D)).toEqual(1);

    expect(Functions.getResultScore(Enums.POWER_FACTOR.MAJOR, Enums.RESULT.A)).toEqual(5);
    expect(Functions.getResultScore(Enums.POWER_FACTOR.MAJOR, Enums.RESULT.C)).toEqual(4);
    expect(Functions.getResultScore(Enums.POWER_FACTOR.MAJOR, Enums.RESULT.D)).toEqual(2);
  });

  it('Invalid scores', () => {
    expect(function(){ Functions.getResultScore('fake', Enums.RESULT.A) }).toThrow();
    expect(function(){ EnFunctionsums.getResultScore(null, Enums.RESULT.A) }).toThrow();
    expect(function(){ Functions.getResultScore(Enums.POWER_FACTOR.MINOR, 'fake') }).toThrow();
    expect(function(){ Functions.getResultScore(Enums.POWER_FACTOR.MINOR, null) }).toThrow();
  });
});