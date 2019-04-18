var Enums = require('../../src/Enums');
var Functions = require('../../src/Functions');

describe('Test enums', () => {
  it('Test power factor enum', () => {
    expect(Functions.isPowerFactor(Enums.POWER_FACTOR.MAJOR)).toBeTruthy();
    expect(Functions.isPowerFactor(Enums.POWER_FACTOR.MINOR)).toBeTruthy();

    expect(Functions.isPowerFactor(null)).toBeFalsy();
    expect(Functions.isPowerFactor(undefined)).toBeFalsy();
    expect(Functions.isPowerFactor('MAJOR')).toBeFalsy();
    expect(Functions.isPowerFactor('MINOR')).toBeFalsy();
    expect(Functions.isPowerFactor(1)).toBeFalsy();
  });

  it('Test result enum', () => {
    expect(Functions.isResult(Enums.RESULT.A)).toBeTruthy();
    expect(Functions.isResult(Enums.RESULT.C)).toBeTruthy();
    expect(Functions.isResult(Enums.RESULT.D)).toBeTruthy();
    expect(Functions.isResult(Enums.RESULT.MISS)).toBeTruthy();
    expect(Functions.isResult(Enums.RESULT.NS)).toBeTruthy();
    expect(Functions.isResult(Enums.RESULT.PENALTY)).toBeTruthy();

    expect(Functions.isResult(null)).toBeFalsy();
    expect(Functions.isResult(undefined)).toBeFalsy();
    expect(Functions.isResult('A')).toBeFalsy();
    expect(Functions.isResult('C')).toBeFalsy();
    expect(Functions.isResult('D')).toBeFalsy();
    expect(Functions.isResult('MISS')).toBeFalsy();
    expect(Functions.isResult('NS')).toBeFalsy();
    expect(Functions.isResult('PENALTY')).toBeFalsy();
    expect(Functions.isResult(1)).toBeFalsy();
  });
});

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