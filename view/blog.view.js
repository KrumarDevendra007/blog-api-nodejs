const router = require('express').Router();
const {postBlog, getBolg, allBlogs, deleteBlog} = require('../controller/controller');
const blog = require('../model/blog.model');

router.post('/postBlog', postBlog);

router.get('/getBolg', getBolg);

router.get('/allBlogs', allBlogs);

router.delete('/deleteBlog', deleteBlog);


module.exports = router;