let myAccount = {
    name: 'Jason Son',
    expenses: 0,
    income: 0,
};

let addExpenses = function(account, amount) {
    account.expenses = account.expenses + amount;
    console.log(account);
};

addExpenses(myAccount, 2.5);
console.log(myAccount);

let otherAccount = myAccount;
otherAccount.income = 1000;

console.log(myAccount);

// Challenge
let bankAccount = {
    name: 'Jason Son',
    expenses: 0,
    income: 0,
    addIncome: function(income) {
        this.income += income;
    },
    resetAccount: function() {
        this.income = 0;
        this.expenses = 0;
    },
    getAccountSummary: function() {
        return `${this.name} has ${this.income} and spend ${this.expenses}`;
    },
};
bankAccount.addIncome(100);
console.log(bankAccount.getAccountSummary());
bankAccount.resetAccount();
console.log(bankAccount.getAccountSummary());
