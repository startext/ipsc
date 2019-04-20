'use strict';

var { Enums, Results, Functions, PowerFactors } = require('../../src');

describe('Test enums - power factor', () => {
  it('Test enum - power factor', () => {
    expect(Enums.PowerFactors['MAJOR']).toEqual(Enums.PowerFactors.MAJOR);
    expect(Enums.PowerFactors['MINOR']).toEqual(Enums.PowerFactors.MINOR);
  })

  it('Test enum: Results direct access by name', () => {
    expect(Enums.Results['A']).toEqual(Enums.Results.A);
    expect(Enums.Results['C']).toEqual(Enums.Results.C);
  })

  it('Test enum: Result.of()', () => {
    expect(Enums.Result.of('A')).toEqual(Enums.Results.A);
    expect(Enums.Result.of('C')).toEqual(Enums.Results.C);

    expect(Enums.Result.of(Enums.Results.A)).toEqual(Enums.Results.A);
    expect(Enums.Result.of(Enums.Results.NS)).toEqual(Enums.Results.NS);

    expect(function() { Enums.Result.of('a') }).toThrow();
    expect(function() { Enums.Result.of('null') }).toThrow();
  })

  it('Test power factor enum', () => {
    expect(Enums.isPowerFactor(Enums.PowerFactors.MAJOR)).toBeTruthy();
    expect(Enums.isPowerFactor(Enums.PowerFactors.MINOR)).toBeTruthy();

    expect(Enums.isPowerFactor(null)).toBeFalsy();
    expect(Enums.isPowerFactor(undefined)).toBeFalsy();
    expect(Enums.isPowerFactor('MAJOR')).toBeFalsy();
    expect(Enums.isPowerFactor('MINOR')).toBeFalsy();
    expect(Enums.isPowerFactor(1)).toBeFalsy();
  })

  it('Test enum: PowerFactor.of()', () => {
    expect(Enums.PowerFactor.of('MINOR')).toEqual(Enums.PowerFactors.MINOR);
    expect(Enums.PowerFactor.of('MAJOR')).toEqual(Enums.PowerFactors.MAJOR);

    expect(Enums.PowerFactor.of(Enums.PowerFactors.MINOR)).toEqual(Enums.PowerFactors.MINOR);
    expect(Enums.PowerFactor.of(Enums.PowerFactors.MAJOR)).toEqual(Enums.PowerFactors.MAJOR);

    expect(function() { Enums.PowerFactor.of('a') }).toThrow();
    expect(function() { Enums.PowerFactor.of('null') }).toThrow();
  })

  it('Test isResult function', () => {
    expect(Enums.isResult(Enums.Results.A)).toBeTruthy();
    expect(Enums.isResult(Enums.Results.C)).toBeTruthy();
    expect(Enums.isResult(Enums.Results.D)).toBeTruthy();
    expect(Enums.isResult(Enums.Results.MISS)).toBeTruthy();
    expect(Enums.isResult(Enums.Results.NS)).toBeTruthy();
    expect(Enums.isResult(Enums.Results.PENALTY)).toBeTruthy();

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
    expect(Enums.getResultScore(Enums.PowerFactors.MINOR, Enums.Results.A)).toEqual(5);
    expect(Enums.getResultScore(Enums.PowerFactors.MINOR, Enums.Results.C)).toEqual(3);
    expect(Enums.getResultScore(Enums.PowerFactors.MINOR, Enums.Results.D)).toEqual(1);

    expect(Enums.getResultScore(Enums.PowerFactors.MAJOR, Enums.Results.A)).toEqual(5);
    expect(Enums.getResultScore(Enums.PowerFactors.MAJOR, Enums.Results.C)).toEqual(4);
    expect(Enums.getResultScore(Enums.PowerFactors.MAJOR, Enums.Results.D)).toEqual(2);
  });

  it('Invalid scores', () => {
    expect(function(){ Enums.getResultScore('fake', Enums.Results.A) }).toThrow();
    expect(function(){ Enums.getResultScore(null, Enums.Results.A) }).toThrow();
    expect(function(){ Enums.getResultScore(Enums.PowerFactors.MINOR, 'fake') }).toThrow();
    expect(function(){ Enums.getResultScore(Enums.PowerFactors.MINOR, null) }).toThrow();
  });
});