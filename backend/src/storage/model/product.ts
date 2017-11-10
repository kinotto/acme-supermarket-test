import * as mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    productCode: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    
})
export const Product = mongoose.model('Product', productSchema);
