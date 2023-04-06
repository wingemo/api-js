/**
 * Asynchronously sends an HTTP request with the given configuration.
 * @param {Object} config - The configuration object for the request.
 * @param {string} config.url - The request URL.
 * @param {string} config.method - The request method (GET, POST, PUT, DELETE, etc.).
 * @param {Object} [config.data] - The request payload (optional).
 * @param {Object} [config.headers] - The request headers (optional).
 * @returns {Promise<Object>} A promise that resolves with the JSON-parsed response data.
 * @throws {Error} If the request fails or the response is not OK.
 */
const asyncHttpRequest = async (config) => {
  try {
    const response = await fetch(config.url, {
      method: config.method,
      body: JSON.stringify(config.data),
      headers: config.headers,
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
