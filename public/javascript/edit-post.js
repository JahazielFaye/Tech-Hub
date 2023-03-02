// This is an async function that handles editing a post
async function editFormHandler(event) {
    event.preventDefault();

        // Get the new title and content of the post from the form input fields
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value.trim();
        // Get the id of the post to be edited from the URL
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

        // Send a PUT request to update the post with the new title and content
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

        // If the update was successful, redirect to the dashboard, otherwise show an error message
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);