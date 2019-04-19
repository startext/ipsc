
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

module.exports = {
  PowerFactors,
  Results,
  Rates
}