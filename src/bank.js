require("../src/transactions.js");

class Bank {
  constructor() {
    this.transactions = [];
    this.balance = 0.0;
  }

  getBalance() {
    return this.balance;
  }

  creditAccount() {
    // a method that adds money to the account and pushes it into the transactions array
    // this.transactions.push()
    // return updated balance
  }
}

module.exports = Bank;

// its easier to print out and resturn the statement after each transaction in here? then create a new class
