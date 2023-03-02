// This function handles the click event on the "Create New Post" button
async function createPostHandler(event) {
    event.preventDefault();

    // When the button is clicked, it redirects the user to the "New Post" page in the dashboard
    document.location.replace('/dashboard/new')
}


document.querySelector('#create-new-post').addEventListener('click', createPostHandler);