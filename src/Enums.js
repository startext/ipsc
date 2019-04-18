'use strict';

const POWER_FACTOR = Object.freeze({
  MINOR: Symbol('Minor'),
  MAJOR: Symbol('Major')
});

const RESULT = Object.freeze({
  A: Symbol('A'),
  C: Symbol('C'),
  D: Symbol('D'),
  MISS: Symbol('Miss'),
  NS: Symbol('No-shoot'),
  PENALTY: Symbol('Penalty')
});

const RATES = Object.freeze({
  [ POWER_FACTOR.MINOR ] : {
    [ RESULT.A ]: 5,
    [ RESULT.C ]: 3,
    [ RESULT.D ]: 1,
    [ RESULT.MISS ]: -10,
    [ RESULT.NS ]: -10,
    [ RESULT.PENALTY ]: -10
  },
  [ POWER_FACTOR.MAJOR ] : {
    [ RESULT.A ]: 5,
    [ RESULT.C ]: 4,
    [ RESULT.D ]: 2,
    [ RESULT.MISS ]: -10,
    [ RESULT.NS ]: -10,
    [ RESULT.PENALTY ]: -10
  }
});

exports.POWER_FACTOR = POWER_FACTOR;
exports.isPowerFactor = (obj) => {
  return obj && Object.values(POWER_FACTOR).includes(obj);
};

exports.RESULT = RESULT;
exports.isResult = (obj) => {
  return obj && Object.values(RESULT).includes(obj);
};

exports.RATES = RATES;
