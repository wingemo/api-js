/**
 * Main function that loads the transaction data from a file, parses the monthly expenses, and logs
 * the resulting object to the console.
 * @param {string} filepath - The path to the file containing the transaction data.
 */
async function run(filepath) {
  try {
    const transactions = await fetchTransactions(filepath);
    const expensesByMonth = parseMonthlyExpenses(transactions);
    console.log(expensesByMonth);
  } catch (error) {
    console.error(error);
  }
}
