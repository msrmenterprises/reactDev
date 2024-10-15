import { useState } from "react"

const CartManage = () => {
    const productList = [
        {id:1,name:'Item1',price:200},
        {id:2,name:'Item2',price:300},
        {id:3,name:'Item3',price:400}
    ]
    const [cart,setCart] = useState([])

    const addCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
        setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
        } else {
        setCart([...cart, { ...product, quantity: 1 }]);
        }
    }

    const totalPrice = () => {
        return cart.reduce((total,item)=>total+item.price,0)
    }

    
return(
    <div>
        <h1>Welcome to Cart Management managing the Cart Quantity</h1>
        <br/>
        <p>Product Listing</p>
        <p>
            <ul>
                {
                    productList && productList.map(
                        (product) => 
                            <li>
                            <span>{product.name} - {product.price}</span>
                            <span><button onClick={()=>addCart(product)}>Add to Cart</button></span>
                            </li>
                    )
                    
                }
                
            </ul>
        </p>

        <p>Cart Management</p>
        <ul>
            {
                cart && cart.map(
                    (item) => 
                            <li>
                            <span>{item.name} - {item.price}</span>
                            <span><button onClick={()=>addCart}>-</button></span>
                            <span><button onClick={()=>addCart(item)}>+</button></span>
                            </li>
                )
            }
            
        </ul>
        <p>Total Price - {totalPrice()}</p>

    </div>

)
}

export default CartManage