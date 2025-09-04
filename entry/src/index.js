const owner = process.env.OWNER;
const check_follow = async (userX, userY, token) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userX}/following/${userY}`, {
      headers: {
        'Accept': 'application/vnd.github+json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
    });

    if (response.status === 204) return true;  // X follows Y
    if (response.status === 404) return false; // X does not follow Y

    throw new Error(`Unexpected status code: ${response.status}`);
  } catch (err) {
    throw err;
  }
};
const userX = 'zakarialaoui10';
const userY = 'hixvmx';
check_follow(userX, owner)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });