import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  email: String,
  ProductName: String,
  stars: Number, 
});

const ProductModel = mongoose.model('ProductRating', productSchema);

export default ProductModel;