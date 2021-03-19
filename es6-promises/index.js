const takeAChance = require('./take-a-chance');

const takeAChancePromise = takeAChance('Kira');

takeAChancePromise.then(resolve => {
  console.log(resolve);
});

takeAChancePromise.catch(reject => {
  console.log(reject.message);
});
