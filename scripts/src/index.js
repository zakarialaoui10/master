import { Octokit } from "octokit";

// Initialize Octokit (use a token for higher rate limits)
const octokit = new Octokit({
  auth: process.env.CUSTOM_TOKEN, // optional, but recommended
});

/**
 * Fetch all followers of a GitHub user
 * @param {string} username - GitHub username
 * @returns {Promise<string[]>} - Array of follower usernames
 */
async function fetchAllFollowers(username) {
  const followers = [];

  // Use Octokit pagination helper
  const iterator = octokit.paginate.iterator(octokit.users.listFollowersForUser, {
    username,
    per_page: 100, // max per page
  });

  for await (const { data } of iterator) {
    for (const follower of data) {
      followers.push(follower.login);
    }
  }

  return followers;
}

// Example usage
(async () => {
  const username = "octocat"; // replace with any username
  const allFollowers = await fetchAllFollowers(username);
  console.log(`Total followers of ${username}:`, allFollowers.length);
  console.log(allFollowers);
})();
