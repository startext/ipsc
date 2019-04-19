'use strict';

const Enums = require('./Enums');

// Functions

function checkClassType(obj, clazz) {
  if (!(obj instanceof clazz))
    throw new TypeError('Expected type:' + typeof clazz + ", current type: " + typeof obj);
}

function __isEnumMember(en, obj) {
  return obj && Object.values(en).includes(obj);
}

function __checkEnumMemberType(en, obj) {
  if (!__isEnumMember(en, obj))
    throw new TypeError(obj);
}

function isPowerFactor(obj) {
  return __isEnumMember(Enums.PowerFactors, obj);
};

function checkPowerFactorType(obj) {
  __checkEnumMemberType(Enums.PowerFactors, obj);
}

function isResult(obj) {
  return __isEnumMember(Enums.Results, obj);
};

function checkResultType(obj) {
  __checkEnumMemberType(Enums.Results, obj);
}

function getResultScore(factor, result) {
  checkPowerFactorType(factor);
  checkResultType(result);

  // console.log("power factor:", factor);
  // console.log("result:", result);
  
  const powerFactorRates = Enums.Rates[factor];
  console.assert(powerFactorRates);

  return powerFactorRates[result];
}

function calculateResultScores(factor, results) {
  checkPowerFactorType(factor);
  checkClassType(results, StageResults);
}

module.exports = {
  isPowerFactor,
  isResult,
  checkClassType,
  checkPowerFactorType,
  checkResultType,
  getResultScore,
  calculateResultScores
}