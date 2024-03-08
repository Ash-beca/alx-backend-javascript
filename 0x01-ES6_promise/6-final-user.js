import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Function to handle profile signup by calling signUpUser and uploadPhoto functions.
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} fileName
 * @returns {Promise}
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ];

  return Promise.allSettled(promises).then((results) => {
    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason
    }));
  });
}
