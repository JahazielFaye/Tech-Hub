async function commentFormHandler(event) {
    event.preventDefault();

        // Get comment text from the form input field
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

        // Get the post ID from the URL
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    // If comment text is not empty
    if (comment_text) {
                // Send a POST request to the comments API endpoint with the comment and post ID
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // If the POST request is successful, reload the page to show the new comment
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);