import Cart from '../models/cart.model.js'

export const getCartByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        // Find the shopping cart by userId and populate the items field
        const cart = await Cart.findOne({ userId: userId }).populate('items.productId');

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        res.status(201).json({
            success: true,
            cart,
        });
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const addItemToCart = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { productId, quantity, price } = req.body;

        // Validate input
        if (!productId || !quantity || !price) {
            return res.status(400).json({ message: 'Product ID, quantity, and price are required' });
        }

        // Find or create the cart for the user
        let cart = await Cart.findOne({ userId: userId });

        if (!cart) {
            cart = new Cart({ userId: userId, items: [] });
        }

        // Check if item already exists in the cart
        const existingItem = cart.items.find(item => item.productId.toString() === productId);

        if (existingItem) {
            // Update quantity if item exists
            existingItem.quantity += quantity;
        } else {
            // Add new item if it doesn't exist
            cart.items.push({ productId, quantity, price });
        }

        // Recalculate total price
        cart.totalPrice = cart.items.reduce((total, item) => total + (item.quantity * item.price), 0);

        // Save the cart
        await cart.save();

        res.status(201).json({
            success: true,
            message: 'Item added successfully',
            cart,
        });
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


export const deleteItemFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.params;

        // Validate input
        if (!productId) {
            return res.status(400).json({ message: 'Product ID is required' });
        }

        // Find the cart for the user
        const cart = await Cart.findOne({ userId: userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        // Find and remove the item
        const initialItemCount = cart.items.length;
        cart.items = cart.items.filter(item => item.productId.toString() !== productId);

        // If no items are left, optionally delete the cart
        if (cart.items.length === 0) {
            await Cart.deleteOne({ userId: userId });
            return res.json({ message: 'Cart was empty and deleted', cart: null });
        }

        // Recalculate total price
        cart.totalPrice = cart.items.reduce((total, item) => total + (item.quantity * item.price), 0);

        // Save the updated cart
        await cart.save();

        res.status(201).json({
            success: true,
            message: 'Item deleted successfully',
            cart,
        });
    } catch (error) {
        console.error('Error deleting item from cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
