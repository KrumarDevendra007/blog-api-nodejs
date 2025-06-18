const Blog = require('../model/blog.model');

const postBlog = async (req, res) => {
    try{
       const blogData = req.body;

       const blog = await Blog.create(blogData); 

       res.json({
        message: `Title: ${blog.title}, Blog has been posted successfully`,
        blog:blog
       });
       
    }
    catch(err){
         res.json({
          message: "An error occurred during posting your blog. Please try again later.",
           error: err.message
         });
    }
}

const getBolg = async (req, res) => {
     
    try{

        const email = req.body;
        // find blog by author email
        const blog = await Blog.findOne(email);
        
        if(!blog){
            return res.send("Author email is incorrect. Please enter correct email.")
        }

        res.json({
            blog:blog
        });
    }
    catch(err){
       res.json({
        message: 'An error occurred to find Blog. Please try again later.',
        error: err.message
       });
    }

}

const allBlogs = async (req, res) => {
    try{
        const blogs = await Blog.find();
        
        res.json({
         message: "All Blogs fetched successfully",
         blogs: blogs
        });
    }
    catch(err){
       res.send(`An error occurred to find all Blogs. Please try again later.`)
    }
}

const deleteBlog = async (req, res) =>{
    try{
        const email = req.body;

        const blog = await Blog.findOneAndDelete(email);

        res.send(`Blog has been delete successfully!`);
    }
    catch(err){
      res.json({
          message:'An error occurred to delete the Blog. Please try again later',
          error:err.message
      });
    }
}


module.exports = {
    postBlog,
    getBolg,
    allBlogs,
    deleteBlog
}