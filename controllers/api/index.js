const router = require('express').Router();
const userRoutes = require('./user_routes');
const postRoutes = require('./post_routes');
const commentsRoutes = require('./comments_routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentsRoutes);