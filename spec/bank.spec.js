const Bank = require("../src/bank.js");

describe("Bank", () => {
  let bank;
  beforeEach(() => {
    bank = new Bank();
  });

  it("gets the initial balance", () => {
    const expected = 0.0;

    const result = bank.getBalance();

    expect(result).toEqual(expected);
  });

  it("credits first ammount", () => {
    const expected = [
      {
        date: "10/01/2012",
        credit: 1000.0,
        debit: 0,
        balance: 1000.0,
      },
    ];

    const result = bank.creditAccount([0]);

    expect(result).toEqual(expected);
  });
});
