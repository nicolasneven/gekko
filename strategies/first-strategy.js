// Let's create our own strategy
var strat = {};

// Prepare everything our strat needs
strat.init = function() {
  // your code!
  console.log('init');
  this.addTalibIndicator('ema9', 'ema', {
  	optInTimePeriod: 9
  });
  this.addTalibIndicator('ema21', 'ema', {
  	optInTimePeriod: 21
  });
  this.addTalibIndicator('ema55', 'ema', {
  	optInTimePeriod: 55
  });
  this.addTalibIndicator('rsi', 'rsi', {
  	optInTimePeriod: 14
  })
}

// What happens on every new candle?
strat.update = function(candle) {
  // your code!
  // console.log('update');
}

// For debugging purposes.
strat.log = function() {
  // your code!
  // console.log('log');
}

// Based on the newly calculated
// information, check if we should
// update or not.
strat.check = function(candle) {
  // your code!
  // console.log('check');
  const ema9 = this.talibIndicators.ema9.result.outReal;
  const ema21 = this.talibIndicators.ema21.result.outReal;
  const ema55 = this.talibIndicators.ema55.result.outReal;
  const rsi = this.talibIndicators.rsi.result.outReal

  console.log(ema9, ema21, ema55);

  if (ema9 < ema21 && ema21 < ema55 && rsi > 30) {
  	console.log('short');
  	this.advice('short');
  } else if (ema9 > ema21 && ema21 > ema55 && rsi < 70) {
  	console.log('long');
  	this.advice('long');
  }
}

// Optional for executing code
// after completion of a backtest.
// This block will not execute in
// live use as a live gekko is
// never ending.
strat.end = function() {
  // your code!
  // console.log('end');
}

module.exports = strat;