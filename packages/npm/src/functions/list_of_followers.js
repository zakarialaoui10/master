export async function list_of_followers(username, token) {
    const followers = [];
    let page = 1;
    const per_page = 100; // max per GitHub API

    while (true) {
        const url = `https://api.github.com/users/${username}/followers?per_page=${per_page}&page=${page}`;
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const response = await fetch(url, { headers });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        if (data.length === 0) break;

        followers.push(...data.map(f => f.login));
        page++;
    }

    return followers;
}