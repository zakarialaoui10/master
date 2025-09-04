import axios from 'axios';
/**
 * Checks if userX follows userY on GitHub.
 * 
 * @param {string} userX - The username of the follower.
 * @param {string} userY - The username of the user to be followed.
 * @returns {Promise<boolean>} A promise that resolves to true if userX follows userY, false otherwise.
 * @throws {Error} If an error occurs during the process, other than a 404 error indicating userY is not found.
 */
const check_follow=async (userX, userY)=>{
    try {
        const response = await axios.get(`https://api.github.com/users/${userX}/following/${userY}`);
        return response.status === 204;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return false;
        } else {
            throw error;
        }
    }
}
// export {
//     check_follow
// }
const userX = 'zakarialaoui10';
const userY = 'hixvmx';
check_follow(userX, userY)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });