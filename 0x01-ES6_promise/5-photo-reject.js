/**
 * Function to upload a photo.
 * @param {string} fileName
 * @returns {Promise}
 */
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
