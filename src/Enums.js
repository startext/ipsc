'use strict';

// Power factor

const PowerFactor_MINOR = 'MINOR';
const PowerFactor_MAJOR = 'MAJOR';

const PowerFactors = Object.freeze({
  [ PowerFactor_MINOR ]: Symbol(PowerFactor_MINOR),
  [ PowerFactor_MAJOR ]: Symbol(PowerFactor_MAJOR)
});

const PowerFactor = {
  of: function(name) {
    console.assert(name, "name is undefined");
    return __getEnumValue(PowerFactors, name);
  }
}

// Stage results

const Results = Object.freeze({
  A: Symbol('A'),
  C: Symbol('C'),
  D: Symbol('D'),
  MISS: Symbol('Miss'),
  NS: Symbol('No-shoot'),
  PENALTY: Symbol('Penalty')
});

const Result = {
  of: function(name) {
    console.assert(name, "name is undefined");
    return __getEnumValue(Results, name);
  }
}

// Rates

const Rates = Object.freeze({
  [ PowerFactors.MINOR ] : {
    [ Results.A ]: 5,
    [ Results.C ]: 3,
    [ Results.D ]: 1,
    [ Results.MISS ]: -10,
    [ Results.NS ]: -10,
    [ Results.PENALTY ]: -10
  },
  [ PowerFactors.MAJOR ] : {
    [ Results.A ]: 5,
    [ Results.C ]: 4,
    [ Results.D ]: 2,
    [ Results.MISS ]: -10,
    [ Results.NS ]: -10,
    [ Results.PENALTY ]: -10
  }
});

// Target types

const TargetTypes = Object.freeze({
  PAPER_TARGER: Symbol('Paper target'),
  PLATE: Symbol('Plate'),
  POPPER: Symbol('Popper')
});

const TargetType = {
  of: function(name) {
    console.assert(name, "name is undefined");
    return __getEnumValue(TargetTypes, name);
  }
}


// Helper functions

function __isEnumKey(en, obj) {
  return en && obj && Object.keys(en).includes(obj);
}

function __getEnumValue(en, name) {
  if (!__isEnumKey(en, name)) {
    if (__isEnumValue(en, name)) {
      return name;
    }
    throw new TypeError(name + " is not key of enum: " + JSON.stringify(en));
  }

  console.assert(en[name]);
  return en[name];
}

function __isEnumValue(en, obj) {
  return obj && Object.values(en).includes(obj);
}

function __checkEnumMemberType(en, obj) {
  if (!__isEnumValue(en, obj))
    throw new TypeError(obj);
}


// Public functions

function checkClassType(obj, clazz) {
  if (!(obj instanceof clazz))
    throw new TypeError('Expected type:' + typeof clazz + ", current type: " + typeof obj);
}

function isPowerFactor(obj) {
  return __isEnumValue(PowerFactors, obj);
};

function checkPowerFactorType(obj) {
  __checkEnumMemberType(PowerFactors, obj);
}

function isResult(obj) {
  return __isEnumValue(Results, obj);
};

function isTargetType(obj) {
  return __isEnumValue(TargetTypes, obj);
};

function checkResultType(obj) {
  __checkEnumMemberType(Results, obj);
}

function getResultScore(factor, result) {
  checkPowerFactorType(factor);
  checkResultType(result);

  const powerFactorRates = Rates[factor];
  console.assert(powerFactorRates);

  return powerFactorRates[result];
}

module.exports = {
  // enums
  PowerFactors,
  PowerFactor,
  Results,
  Result,
  Rates,
  TargetTypes,
  TargetType,

  // enum functions
  isPowerFactor,
  isResult,
  isTargetType,
  checkClassType,
  checkPowerFactorType,
  checkResultType,
  getResultScore
}