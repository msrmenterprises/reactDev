import { useState } from "react"

const ShopCart = () => {
    const productList = [
        {  id:1,name:'Product1',price:999 },
        {   id:2,name:'Product2',price:977},
        {   id:3,name:'Product3',price:787},
        {   id:3,name:'Product4',price:555}
    ]
    const [cart,setCart] = useState([]);
    //function to Add Product to Cart
    const addToCart = (product) => {
        setCart([...cart,product])

    }
    // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

    return(
        <div>
            <h1>Welcome to Shopping feature</h1>
            <br/>
            <h2>Product List </h2>
            <div>
                {
                    productList.map(
                        (product) => 
                        <p id={product.id}>
                        {product.name} &nbsp;
                        <button onClick={()=>addToCart(product)}>Add to Cart</button>
                        </p>
                    )
                    
                }
                
            </div>
            <br/>
            <h2>Cart Listing</h2>
            <div>
                {
                    cart && cart.map(
                        (product) => <p>{product.name} - {product.price} </p>
                    )
                }
                
                <p>Total Cart Price: {getTotalPrice()}</p>
            </div>

        </div>
    )

}

export default ShopCart