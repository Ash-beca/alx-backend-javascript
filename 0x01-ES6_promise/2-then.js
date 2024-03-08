/**
 * Function to handle responses from an API Promise.
 * @param {Promise} promise
 * @returns {Promise} 
 */
function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      console.error('Got an error from the API');
      return new Error();
    });
}

export default handleResponseFromAPI;
