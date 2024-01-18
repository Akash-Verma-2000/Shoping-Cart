import { createContext, useContext, useState } from "react";
import CartModal from "./components/CartModel";

export const itemContext = createContext();


export function useValue() {
    return useContext(itemContext);
}


export default function CustomItemContext({ children }) {

    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);

    const handleAdd = (product) => {
        const index = cart.findIndex(item => item.id === product.id);

        if (index === -1) {
            setCart([...cart, { ...product, qty: 1 }])
            setTotal(total + product.price);

        } else {
            cart[index].qty++;
            setCart(cart);
            console.log(cart);
            setTotal(total + cart[index].price);
        }
        setItem(item + 1);

    };

    const handleReset = () => {
        setItem(0);
        setTotal(0);
    }

    const clear = () => {
        setTotal(0);
        setItem(0);
        setCart([]);
    }

    const handleRemove = (id) => {

        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            cart[index].qty--;
            setItem(item - 1);
            if (cart[index].qty == 0) {
                cart.splice(index,1);
            }
        }
        setCart(cart);
        setTotal(total - cart[index].price);

    };

    const toggle = () => {
        setShowCart(!showCart);
    }


    return (

        <itemContext.Provider value={{ clear, cart, toggle, handleReset, handleAdd, handleRemove, total, setTotal, item, setItem }}>
            {showCart && <CartModal />}
            {children}

        </itemContext.Provider>
    )
}

