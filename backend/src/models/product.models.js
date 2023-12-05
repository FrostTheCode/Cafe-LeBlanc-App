import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        default: 0.0,
        require: true
    },
    year:{
        type: Number,
        default: 2023,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
}, {
    timestamps: true,
});

export default mongoose.model('Products', productsSchema);