const mongoose = require('mongoose');
 

const ProductSchema = new mongoose.Schema(
   {
        title: { 
          type: String,
          required: [true, "title is required"],
          maxlength: [8, "title must be less than 8 characters long"]
        },
        price: { 
            type: Number,
            required: [true, "price is required"],
        },
        description: { 
            type: String,
            required: [true, "description is required"],
           minlength: [8, "description must be less than 8 characters long"]
        }
   }, 
   { timestamps: true }
);
 
const Product = mongoose.model('Product', ProductSchema);
 
module.exports = Product;