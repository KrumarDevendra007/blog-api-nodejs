const express = require('express');
const  mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 8080;
const blogRouter = require('./view/blog.view')

app.use(express.json());
const mongooseDB = require('mongoose');
dotenv.config();




mongooseDB.connect(process.env.MONGO)
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