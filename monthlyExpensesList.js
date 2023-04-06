function parseMonthlyExpenses(data) {
  const expensesByMonth = {};

  data.transactions.forEach(transaction => {
    const date = new Date(transaction.dates.booked);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const expense = transaction.amount.value.unscaledValue / 100;
  
    if (!expensesByMonth[year]) {
      expensesByMonth[year] = {};
    }
    if (!expensesByMonth[year][month]) {
      expensesByMonth[year][month] = 0;
    }
  
    expensesByMonth[year][month] += expense;
  });

  return expensesByMonth;
}
