import * as mongoose from 'mongoose';
const basketSchema = new mongoose.Schema({
    productCode: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        min: 1
    }
    
})
export const Basket = mongoose.model('Basket', basketSchema);
