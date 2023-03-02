// This middleware function checks whether a user is logged in. If the user is not logged in, they will be redirected to the login page. If the user is logged in, the next middleware function will be called.
const withAuth = (req, res, next) => {
      // If the user is not logged in
    if (!req.session.user_id) {
            // Redirect the user to the login page
      res.redirect('/login');
    } else {
            // Call the next middleware function
      next();
    }
  };
  
    // Export the withAuth function so that it can be used in other files
  module.exports = withAuth;
  