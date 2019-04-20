
const PowerFactor_MINOR = 'MINOR';
const PowerFactor_MAJOR = 'MAJOR';

const PowerFactors = Object.freeze({
  [ PowerFactor_MINOR ]: Symbol(PowerFactor_MINOR),
  [ PowerFactor_MAJOR ]: Symbol(PowerFactor_MAJOR)
});

const Results = Object.freeze({
  A: Symbol('A'),
  C: Symbol('C'),
  D: Symbol('D'),
  MISS: Symbol('Miss'),
  NS: Symbol('No-shoot'),
  PENALTY: Symbol('Penalty')
});

function __isEnumKey(en, obj) {
  return en && obj && Object.keys(en).includes(obj);
}

function getEnumValue(en, name) {
  if (!__isEnumKey(en, name))
    throw new TypeError(name + " is not key of enum " + typeof en);

  console.assert(en[name]);
  return en[name];
}

const PowerFactor = {
  of: function(name) { return getEnumValue(PowerFactors, name); }
}

const Result = {
  of: function(name) { return getEnumValue(Results, name); }
}

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

// Functions

function checkClassType(obj, clazz) {
  if (!(obj instanceof clazz))
    throw new TypeError('Expected type:' + typeof clazz + ", current type: " + typeof obj);
}

function __isEnumValue(en, obj) {
  return obj && Object.values(en).includes(obj);
}

function __checkEnumMemberType(en, obj) {
  if (!__isEnumValue(en, obj))
    throw new TypeError(obj);
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

  // enum functions
  isPowerFactor,
  isResult,
  checkClassType,
  checkPowerFactorType,
  checkResultType,
  getResultScore
}