/**
 * Send {method} request to {path} with body
 * @param {string} method method to perform
 * @param {string} path url path to call
 * @param {string} requestBody
 * @return {Promise} of last response
 */
export default function(method, path, requestBody) {
  let body;
  try {
    body = JSON.parse(requestBody);
  } catch (error) {
    body = requestBody;
  }

  return this.client[method.toLowerCase()](path, body)
    .then(response => {
      this.lastResponse = response;
      return this.lastResponse;
    });
}
