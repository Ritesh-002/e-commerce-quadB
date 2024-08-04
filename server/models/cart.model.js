import { Schema, model } from 'mongoose';

const shoppingCartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        productId: { type: Schema.Types.ObjectId, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    totalPrice: { type: Number, default: 0 }
},
    {
        timestamps: true,
    }
);

const Cart = model('ShoppingCart', shoppingCartSchema);

export default Cart;