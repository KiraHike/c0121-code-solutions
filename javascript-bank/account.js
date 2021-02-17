/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var dep = new Transaction('deposit', amount);
  if (amount > 0) {
    this.transactions.push(dep);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var wd = new Transaction('withdrawal', amount);
  if (amount > 0) {
    this.transactions.push(wd);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var depTotal = 0;
  var wdTotal = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      depTotal += this.transactions[i].amount;
    } else {
      wdTotal += this.transactions[i].amount;
    }
  }
  return depTotal - wdTotal;
};
