import * as mongoose from 'mongoose';
const ideaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    target: {
        type: Number,
        required: true
    },
    raised: {
        type: Number,
        default: 0
    },
    equity: {
        type: String,
        required: true
    },
    investors: {
        type: Number,
        required: true
    },
    
})
export const Idea = mongoose.model('Idea', ideaSchema);
