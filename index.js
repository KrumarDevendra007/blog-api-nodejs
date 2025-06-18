const express = require('express');
const  mongoose = require('mongoose');
const app = express();
const PORT = 8080;
const blogRouter = require('./view/blog.view')

app.use(express.json());
const mongooseDB = require('mongoose');

const uri = 'mongodb+srv://mjrajak47z:H3Pkg3GTHrbWmJDd@cluster0.ht39vu6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


mongooseDB.connect(uri)
.then(()=>{
    console.log("BlogDatabase connected successfully");
})
.catch((err)=>{
    console.error("Error BlogDatabase to MongoDB:", err);
})

const middleware = (req, res, next) => {
    const route = req.originalUrl;
    const method = req.method;
    const time = new Date().toLocaleString();

    console.log(`Route : ${route}, Methood:  ${method}, Time: ${time}`);

      next();
}

app.use(middleware);
app.use('/', blogRouter);


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})