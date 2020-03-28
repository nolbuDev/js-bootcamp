const account = {
    name: 'Jason son',
    expenses: [],
    income: [],
    addIncome: function(description, amount) {
        this.income.push({ description, amount });
    },
    addExpense: function(description, amount) {
        this.expenses.push({ description, amount });
    },
    getAccountSummary: function() {
        let incomeSummary = 0,
            expenseSummary = 0;
        this.income.forEach(cur => {
            incomeSummary += cur.amount;
        });
        this.expenses.forEach(cur => {
            expenseSummary += cur.amount;
        });
        console.log(`${this.name} balance $${incomeSummary - expenseSummary}. $${incomeSummary} in income, $${expenseSummary} in expense`);
    },
};

// Expense  -> description, amount
// addExpense -> description, amout,
// getAccountSummary -> total up all expenses => Andrew Mead has $1250 in expense.

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
account.getAccountSummary();

// 1. add income array to account
// 2. addIncome method => description, amount
// 3. Tweak getAccountSummary : Nolbu has a balance of $10.
