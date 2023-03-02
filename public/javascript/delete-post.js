// This function handles the click event on the delete button and prevents the default form submission behavior
async function deleteFormHandler(event) {
  event.preventDefault();

  // This extracts the post ID from the current URL
  const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
// This sends a DELETE request to the server for the specified post ID
  const response = await fetch(`/api/posts/${post_id}`, {
      method: 'DELETE'
  });

  // If the server responds with a successful status code, the user is redirected to the dashboard
  if (response.ok) {
      document.location.replace('/dashboard');
  } else {
      alert(response.statusText);
  }
}

// This adds an event listener to the delete button that calls the deleteFormHandler function when clicked
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);