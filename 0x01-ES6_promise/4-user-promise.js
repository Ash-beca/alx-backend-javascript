/**
 * Function to sign up a user.
 * @param {string} firstName
 * @param {string} lastName
 * @returns {Promise}
 */
function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}

export default signUpUser;
