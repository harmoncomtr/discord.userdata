const axios = require('axios');

// Function to get user data
async function getUserData(userId) {
  try {
    // Make a GET request to the API endpoint
    const response = await axios.get(`https://harmondiscordbots-userapi.hf.space/users/${userId}`);

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error fetching user data:', error);
    throw error;
  }
}

// Export the getUserData function
module.exports = { getUserData };