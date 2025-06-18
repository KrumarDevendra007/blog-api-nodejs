const mongoose = require('mongoose');

const bolgSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    author:{
        type: String,
        required: true,
        trim: true
    },
    email:{
      type:String,
      required:true,
      unique:true,
      validate:{
        validator: function(v){
             return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
        },
        message: props => `${props.value} is not a valid email!`
      },
      trim: true,
      lowercase:true
    }
});

const Blog = mongoose.model("Blog", bolgSchema);

module.exports = Blog