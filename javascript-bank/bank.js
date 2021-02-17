/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var acct = new Account(this.nextAccountNumber, holder);
    acct.deposit(balance);
    this.accounts.push(acct);
    this.nextAccountNumber++;
    return acct.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var match = null;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      match = this.accounts[i];
    }
  }
  if (match === null) {
    return null;
  } else {
    return match;
  }
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  if (!this.accounts.length >= 0) {
    return 0;
  } else {
    for (var i = 0; i < this.accounts.length; i++) {
      total += this.accounts[i].getBalance();
    }
  }
  return total;
};
