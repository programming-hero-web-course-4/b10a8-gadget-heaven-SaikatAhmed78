import { toast } from "react-toastify";


const productIemget = (itemName) => {
    const getAllProduct = localStorage.getItem(itemName);

    if (getAllProduct) {
        const cartProducts = JSON.parse(getAllProduct);
        return cartProducts;
    } else {
        return [];
    }
};

const setProductItem = (itemName, product) => {
    const storedItem = productIemget(itemName);
    const findingItem = storedItem.find(item => item.product_id === product.product_id);

    if (!findingItem) {
        storedItem.push(product);
        localStorage.setItem(itemName, JSON.stringify(storedItem));
        toast.success('Product Successfully Added to Cart!', {
           position: "top-center",
           autoClose: 1000,
        });
    } else {
        toast.error(`${itemName === 'cart' ? 'Product Already Added to Cart' : 'Product Already Added to Wishlist'}`, {
            position: 'top-center'
        });
    }
};

const removeItem = (itemName, product) => {
    const storedItem = productIemget(itemName);
    const filteringItem = storedItem.filter(item => item.product_id !== product.product_id);

    localStorage.setItem(itemName, JSON.stringify(filteringItem));
};




export { productIemget, setProductItem, removeItem };
