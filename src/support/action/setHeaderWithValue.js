/**
 * set header {name} with value {value}
 * @param {string} name header name
 * @param {string} value header value
 * @return {Promise} returns request header
 */
export default function(name, value) {
  return this.client.setHeader(name, value);
}
