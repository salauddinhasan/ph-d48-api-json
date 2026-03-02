// Function to load posts
const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
    .then(res => res.json())
    .then(data => displayPosts(data))
    .catch(err => console.error("Error fetching posts:", err));
};

// Function to display posts in HTML
const displayPosts = (posts) => {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ''; // clear previous posts

    // Show only first 10 posts (optional)
    posts.slice(0, 10).forEach(post => {
        const li = document.createElement('li');
        li.innerText = post.title;
        postContainer.appendChild(li);
    });
};

// Add click event listener to button
document.getElementById('load-btn').addEventListener('click', loadPost);