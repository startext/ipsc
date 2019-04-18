var Enums = require('../../src/Enums');
var Functions = require('../../src/Functions');

describe('Test enums', () => {
  it('Test power factor enum', () => {
    expect(Enums.isPowerFactor(Enums.POWER_FACTOR.MAJOR)).toBeTruthy();
    expect(Enums.isPowerFactor(Enums.POWER_FACTOR.MINOR)).toBeTruthy();

    expect(Enums.isPowerFactor(null)).toBeFalsy();
    expect(Enums.isPowerFactor(undefined)).toBeFalsy();
    expect(Enums.isPowerFactor('MAJOR')).toBeFalsy();
    expect(Enums.isPowerFactor('MINOR')).toBeFalsy();
    expect(Enums.isPowerFactor(1)).toBeFalsy();
  });

  it('Test result enum', () => {
    expect(Enums.isResult(Enums.RESULT.A)).toBeTruthy();
    expect(Enums.isResult(Enums.RESULT.C)).toBeTruthy();
    expect(Enums.isResult(Enums.RESULT.D)).toBeTruthy();
    expect(Enums.isResult(Enums.RESULT.MISS)).toBeTruthy();
    expect(Enums.isResult(Enums.RESULT.NS)).toBeTruthy();
    expect(Enums.isResult(Enums.RESULT.PENALTY)).toBeTruthy();

    expect(Enums.isResult(null)).toBeFalsy();
    expect(Enums.isResult(undefined)).toBeFalsy();
    expect(Enums.isResult('A')).toBeFalsy();
    expect(Enums.isResult('C')).toBeFalsy();
    expect(Enums.isResult('D')).toBeFalsy();
    expect(Enums.isResult('MISS')).toBeFalsy();
    expect(Enums.isResult('NS')).toBeFalsy();
    expect(Enums.isResult('PENALTY')).toBeFalsy();
    expect(Enums.isResult(1)).toBeFalsy();
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