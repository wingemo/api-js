/**
 * Parses the JSON response and returns the transactions array.
 * @param {string} response - The JSON-formatted response string.
 * @returns {Array} An array of transaction objects.
 */
function parseResponse(response) {
    const data = JSON.parse(response);
    const transactions = data.transactions;
    return transactions;
}

/**
 * Fetches transactions by making two API requests with preconfigured settings
 * (config1 and config2) and returns the parsed transactions array.
 * @returns {Promise<Array>} A promise that resolves with an array of transaction objects.
 */
const fetchTransactions = async () => {
    try {
        const accessToken = await asyncHttpRequest(config1);
        const listTransactions = await asyncHttpRequest(config2);
        return parseResponse(transactions);
    } catch (error) {
        console.error(error);
    }
};

export default fetchTransactions;
