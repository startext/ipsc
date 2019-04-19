var { Enums, Results, Functions, PowerFactors } = require('../../src');
// var Functions = require('../../src/Functions');

describe('Test enums - power factor', () => {
  it('Test enum - power factor', () => {
    expect(Enums.PowerFactors['MAJOR']).toEqual(Enums.PowerFactors.MAJOR);
    expect(Enums.PowerFactors['MINOR']).toEqual(Enums.PowerFactors.MINOR);
  })

  it('Test enum - result', () => {
    expect(Enums.Results['A']).toEqual(Enums.Results.A);
    expect(Enums.Results['C']).toEqual(Enums.Results.C);
  })

  it('Test power factor enum', () => {
    expect(Functions.isPowerFactor(Enums.PowerFactors.MAJOR)).toBeTruthy();
    expect(Functions.isPowerFactor(Enums.PowerFactors.MINOR)).toBeTruthy();

    expect(Functions.isPowerFactor(null)).toBeFalsy();
    expect(Functions.isPowerFactor(undefined)).toBeFalsy();
    expect(Functions.isPowerFactor('MAJOR')).toBeFalsy();
    expect(Functions.isPowerFactor('MINOR')).toBeFalsy();
    expect(Functions.isPowerFactor(1)).toBeFalsy();
  });

  it('Test result enum', () => {
    expect(Functions.isResult(Enums.Results.A)).toBeTruthy();
    expect(Functions.isResult(Enums.Results.C)).toBeTruthy();
    expect(Functions.isResult(Enums.Results.D)).toBeTruthy();
    expect(Functions.isResult(Enums.Results.MISS)).toBeTruthy();
    expect(Functions.isResult(Enums.Results.NS)).toBeTruthy();
    expect(Functions.isResult(Enums.Results.PENALTY)).toBeTruthy();

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
    expect(Functions.getResultScore(Enums.PowerFactors.MINOR, Enums.Results.A)).toEqual(5);
    expect(Functions.getResultScore(Enums.PowerFactors.MINOR, Enums.Results.C)).toEqual(3);
    expect(Functions.getResultScore(Enums.PowerFactors.MINOR, Enums.Results.D)).toEqual(1);

    expect(Functions.getResultScore(Enums.PowerFactors.MAJOR, Enums.Results.A)).toEqual(5);
    expect(Functions.getResultScore(Enums.PowerFactors.MAJOR, Enums.Results.C)).toEqual(4);
    expect(Functions.getResultScore(Enums.PowerFactors.MAJOR, Enums.Results.D)).toEqual(2);
  });

  it('Invalid scores', () => {
    expect(function(){ Functions.getResultScore('fake', Enums.Results.A) }).toThrow();
    expect(function(){ EnFunctionsums.getResultScore(null, Enums.Results.A) }).toThrow();
    expect(function(){ Functions.getResultScore(Enums.PowerFactors.MINOR, 'fake') }).toThrow();
    expect(function(){ Functions.getResultScore(Enums.PowerFactors.MINOR, null) }).toThrow();
  });
});