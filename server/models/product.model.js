import { model, Schema } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: false
    },
    images: [{
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        }
    }],
    thumbnail: {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        },
    },
    ratings: {
        average: { type: Number, default: 0 }, // Average rating
        count: { type: Number, default: 0 }   // Number of ratings
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    measurements: {
        length: { type: String },
        width: { type: String },
        height: { type: String }
    },
    color: {
        type: String
    },
    additionalInfo: {
        description: { type: String },
        packageNumber: { type: String }
    },
    tags: [{
        type: String
    }], // Optional: Tags for search or categorization
    isActive: {
        type: Boolean,
        default: true
    }, // Flag to indicate if the product is active
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true,
    }
);

const Product = model('Product', productSchema);
export default Product;
