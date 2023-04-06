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

/**
 * Main function that loads the transaction data from a file, parses the monthly expenses, and logs
 * the resulting object to the console.
 * @param {string} filepath - The path to the file containing the transaction data.
 */
async function run() {
  try {
    const transactions = await fetchTransactions();
    const expensesByMonth = parseMonthlyExpenses(transactions);
    console.log(expensesByMonth);
  } catch (error) {
    console.error(error);
  }
}

export default run;
