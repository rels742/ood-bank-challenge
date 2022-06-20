class Transactions {
  constructor(date, credit, debit, balance) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  getDate() {
    return this.date;
  }

  getCredit() {
    return this.credit;
  }

  getDebit() {
    return this.debit;
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = Transactions;

// This class stores data for each bank account transations with a constrctor that when the class is called it displays the date, credit, debit, balance
