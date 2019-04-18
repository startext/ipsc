'use strict';

const Enums = require('./Enums');

exports.getResultScore = function(factor, result) {
  if (!Enums.RATES.hasOwnProperty(factor))
    throw new Error("Unsupported power factor: " + factor);

  const powerFactorRates = Enums.RATES[factor];
  console.assert(powerFactorRates);

  if (!powerFactorRates.hasOwnProperty(result))
    throw new Error("Unsupported result: " + Symbol.keyFor(result));

  return powerFactorRates[result];
}