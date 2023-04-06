async function monthlyExpensesList(data) {
  return new Promise((resolve, reject) => {
    const expensesByMonth = {};

    try {
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

      resolve(expensesByMonth);
    } catch (error) {
      reject(error);
    }
  });
}
