'use strict';

const Enums = require('./Enums');
const StageResults = require('./StageResults');

function checkClassType(obj, clazz) {
  if (!(obj instanceof clazz))
    throw new TypeError(obj);
}

function __isEnumMember(en, obj) {
  return obj && Object.values(en).includes(obj);
}

function __checkEnumMemberType(en, obj) {
  if (!__isEnumMember(en, obj))
    throw new TypeError(obj);
}

function isPowerFactor(obj) {
  return __isEnumMember(Enums.POWER_FACTOR, obj);
};

function checkPowerFactorType(obj) {
  __checkEnumMemberType(Enums.POWER_FACTOR, obj);
}

function isResult(obj) {
  return __isEnumMember(Enums.RESULT, obj);
};

function checkResultType(obj) {
  __checkEnumMemberType(Enums.RESULT, obj);
}

// power factor functions

exports.isPowerFactor = isPowerFactor;
exports.checkPowerFactorType = checkPowerFactorType;
exports.checkClassType = checkClassType;

// stage result functions

exports.isResult = isResult;
exports.checkResultType = checkResultType;

exports.getResultScore = function(factor, result) {
  checkPowerFactorType(factor);
  checkResultType(result);

  const powerFactorRates = Enums.RATES[factor];
  console.assert(powerFactorRates);

  return powerFactorRates[result];
}

exports.calculateResultScores = function(factor, results) {
  checkPowerFactorType(factor);
  checkClassType(results, StageResults);
}