var assert = require('assert');
var Yatzy = require('../lib/yatzy');


describe('Chance', function () {
  it('scores sum of all dice', function () {
    assert.equal(15, new Yatzy(2, 3, 4, 5, 1).chance());
    assert.equal(16, new Yatzy(3, 3, 4, 5, 1).chance());
    // assert.equal(15, Yatzy.chance(2, 3, 4, 5, 1));
    // assert.equal(16, Yatzy.chance(3, 3, 4, 5, 1));
  });
});

describe('Yatzy', function () {
  it('scores 50', function () {
    // assert.equal(50, Yatzy.yatzy(4,4,4,4,4));
    // assert.equal(50, Yatzy.yatzy(6,6,6,6,6));
    // assert.equal(0, Yatzy.yatzy(6,6,6,6,3));
    assert.equal(50, new Yatzy(4, 4, 4, 4, 4).yatzy());
    assert.equal(50, new Yatzy(6, 6, 6, 6, 6).yatzy());
    assert.equal(0, new Yatzy(6, 6, 6, 6, 3).yatzy());
  });
});

describe('Ones', function () {
  it('score the sum of 1s', function () {
    assert.equal(1, new Yatzy(1, 2, 3, 4, 5).ones());
    assert.equal(2, new Yatzy(1, 2, 1, 4, 5).ones());
    assert.equal(0, new Yatzy(6, 2, 2, 4, 5).ones());
    assert.equal(4, new Yatzy(1, 2, 1, 1, 1).ones());
    // assert.equal(1, Yatzy.ones(1,2,3,4,5));
    // assert.equal(2, Yatzy.ones(1,2,1,4,5));
    // assert.equal(0, Yatzy.ones(6,2,2,4,5));
    // assert.equal(4, Yatzy.ones(1,2,1,1,1));
  });
});

describe('Twos', function () {
  it('score the sum of 2s', function () {
    // assert.equal(4, Yatzy.twos(1,2,3,2,6));
    // assert.equal(10, Yatzy.twos(2,2,2,2,2));
    assert.equal(4, new Yatzy(1, 2, 3, 2, 6).twos());
    assert.equal(10, new Yatzy(2, 2, 2, 2, 2).twos());
  });
});

describe('Threes', function () {
  it('score the sum of 3s', function () {
    assert.equal(6, new Yatzy(1, 2, 3, 2, 3).threes());
    assert.equal(12, new Yatzy(2, 3, 3, 3, 3).threes());
    // assert.equal(6, Yatzy.threes(1,2,3,2,3));
    // assert.equal(12, Yatzy.threes(2,3,3,3,3));
  });
});

describe('Fours', function () {
  it('score the sum of 4s', function () {
    assert.equal(12, new Yatzy(4, 4, 4, 5, 5).fours());
    assert.equal(8, new Yatzy(4, 4, 5, 5, 5).fours());
    assert.equal(4, new Yatzy(4, 5, 5, 5, 5).fours());
  });
});

describe('Fives', function () {
  it('score the sum of fives', function () {
    assert.equal(10, new Yatzy(4, 4, 4, 5, 5).fives());
    assert.equal(15, new Yatzy(4, 4, 5, 5, 5).fives());
    assert.equal(20, new Yatzy(4, 5, 5, 5, 5).fives());
  });
});

describe('Sixes', function () {
  it('score the sum of sixes', function () {
    assert.equal(0, new Yatzy(4, 4, 4, 5, 5).sixes());
    assert.equal(6, new Yatzy(4, 4, 6, 5, 5).sixes());
    assert.equal(18, new Yatzy(6, 5, 6, 6, 5).sixes());
  });
});

describe('One pair', function () {
  it('scores the sum of the highest pair', function () {
    assert.equal(6, new Yatzy(3, 4, 3, 5, 6).scorePair());
    assert.equal(10, new Yatzy(5, 3, 3, 3, 5).scorePair());
    assert.equal(12, new Yatzy(5, 3, 6, 6, 5).scorePair());
  });
});

describe('Two pair', function () {
  it('scores the sum of the two pairs', function () {
    assert.equal(16, new Yatzy(3, 3, 5, 4, 5).twoPair());
    assert.equal(16, new Yatzy(3, 3, 5, 5, 5).twoPair());
    // assert.equal(16, Yatzy.twoPair(3,3,5,4,5));
    // assert.equal(16, Yatzy.twoPair(3,3,5,5,5));
  });
});

describe('Three of a kind', function () {
  it('scores the sum of the three of the kind', function () {
    assert.equal(9, new Yatzy(3, 3, 3, 4, 5).threeOfAKind());
    assert.equal(15, new Yatzy(5, 3, 5, 4, 5).threeOfAKind());
    assert.equal(9, new Yatzy(3, 3, 3, 3, 5).threeOfAKind());
  });
});

describe('Four of a kind', function () {
  it('scores the sum of the four of the kind', function () {
    assert.equal(12, new Yatzy(3, 3, 3, 3, 5).fourOfAKind());
    assert.equal(20, new Yatzy(5, 5, 5, 4, 5).fourOfAKind());
    assert.equal(9, new Yatzy(3, 3, 3, 3, 3).threeOfAKind());
  });
});

describe('Small straight', function () {
  it('scores 15', function () {
    assert.equal(15, new Yatzy(1, 2, 3, 4, 5).smallStraight());
    assert.equal(15, new Yatzy(2, 3, 4, 5, 1).smallStraight());
    assert.equal(0, new Yatzy(1, 2, 2, 4, 5).smallStraight());
  });
});

describe('Large straight', function () {
  it('scores 20', function () {
    assert.equal(20, new Yatzy(6, 2, 3, 4, 5).largeStraight());
    assert.equal(20, new Yatzy(2, 3, 4, 5, 6).largeStraight());
    assert.equal(0, new Yatzy(1, 2, 2, 4, 5).largeStraight());
  });
});

describe('Full house', function () {
  it('scores the sum of the full house', function () {
    assert.equal(18, new Yatzy(6, 2, 2, 2, 6).fullHouse());
    assert.equal(0, new Yatzy(2, 3, 4, 5, 6).fullHouse());
  });
});
