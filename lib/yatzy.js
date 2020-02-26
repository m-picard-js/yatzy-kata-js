var Yatzy = function () {
  this.roll = [...arguments]; // Raw value

  this.game = {}; // Count per dice value
  this.roll.forEach(v => {
    this.game[v] = this.game[v] || 0;
    this.game[v]++;
  });

  this.straights = {
    small: [1, 2, 3, 4, 5],
    large: [2, 3, 4, 5, 6]
  };

  this.score = { // Score output
    'small': 15,
    'large': 20,
    'yazy': 50
  };

  /**
  * Sums the values of each dice
  * filter : the value to consider for adding
  */
  const _sum = function (filter) {
    return this.roll.reduce((sum, i) => {
      return ((!filter || i === filter) ? i + sum : sum);
    }, 0);
  };

  /**
    * Builds scores for pairs, thirds etc... from biggest value to lowest
    * value : value to multiply (2 for pairs, 3 for thirds...)
    * count : number of 'pairs' to summ
    * strict: is count strict
    */
  const _scoreValue = function (value, count, strict) {
    let sum = 0;

    console.log(value, 'stric', strict);
    Object.keys(this.game)
      .sort((a, b) => b - a)
      .forEach(k => {
        if (((this.game[k] >= value && !strict) || (this.game[k] === value && strict)) && count) {
          sum += value * k;
          count -= 1;
        }
      });

    return sum;
  };

  const _straight = function (type) {
    return this.straights[type].reduce((bool, v) => (!!this.game[v] && bool), true) ? this.score[type] : 0;
  };

  const _yatzy = function () {
    return this.fiveOfAKind(true) ? this.score.yazy : 0;
  };

  const _fullHouse = function () {
    var _2 = this.scorePair(true);
    var _3 = this.threeOfAKind(true);

    if (_2 && _3) {
      return (_2 + _3);
    }

    return 0;
  };

  // Public methods
  this.ones = _sum.bind(this, 1);
  this.twos = _sum.bind(this, 2);
  this.threes = _sum.bind(this, 3);
  this.fours = _sum.bind(this, 4);
  this.fives = _sum.bind(this, 5);
  this.sixes = _sum.bind(this, 6);
  this.chance = _sum.bind(this);
  this.scorePair = _scoreValue.bind(this, 2, 1);
  this.twoPair = _scoreValue.bind(this, 2, 3);
  this.threeOfAKind = _scoreValue.bind(this, 3, 1);
  this.fourOfAKind = _scoreValue.bind(this, 4, 1);
  this.fiveOfAKind = _scoreValue.bind(this, 5, 1);
  this.smallStraight = _straight.bind(this, 'small');
  this.largeStraight = _straight.bind(this, 'large');
  this.yatzy = _yatzy.bind(this);
  this.fullHouse = _fullHouse.bind(this);
};

module.exports = Yatzy;
