const router = require('express').Router();

// Import the user, post, and comment routes
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');

// Mount the user, post, and comment routes on the appropriate URL paths
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes)

module.exports = router;