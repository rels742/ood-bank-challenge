Transaction Domain Model 
PROPERTIES (what data do I need to store?):
- date: string
- credit: number 
- debit: number 
- balance: number

METHODS (actions/functions):
constructor() 
this. date, credit, debit, balance

getDate () or setDate() not sure what would be used 

getDebit () //

getCredit() //

getDebit() //

getBalance() // 

setTransactions() - a method that gets this.date, credit, debit and balance and returns it as an object with key values in an array??



Bank Domain Model 
PROPERTIES (what data do I need to store?):

METHODS (actions/functions):
viewBalance() - a method that returns updated balance amount in bank account. 

creditAccount(amount) - a method that takes the paramter (amount) and adds that amount to balance amount. 

debitAccount(amount) -  a method that takes the paramter (amount) and deducts that amount from the balance amount. 

withdraw(amount) - a method that takes the parameter and compares it with the balance.
// if less than balance the amount will be deducted from the current balance.

<!-- // return updated balance maybe?? -->

// else if withdraw amount is greater than the balance,
//return an error message, "insufficient funds, this action cannot be completed"

getTransactions() - a method that gets the data from the transactions class and shows an overview (array of objects) of the transaction history.