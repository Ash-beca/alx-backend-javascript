/**
 * Prototype function to get a full response from a fake API.
 * @param {boolean} success 
 * @returns {Promise} 
 **/

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
