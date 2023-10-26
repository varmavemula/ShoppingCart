import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {   title:"Mobile-phone",
                    price:9999,
                    Qnt:10,
                    img:'',
                    id:1003
                },
                {   title:"smart-watch",
                    price:1999,
                    Qnt:100,
                    img:'',
                    id:1004
                },
                {   title:"Nike sneakers",
                    price:4999,
                    Qnt:1,
                    img:'',
                    id:1005
                } ]
            
        }  
    }
    
    render(){
        const {products}=this.state;
        return (
            <div className="Cart">
                
                {products.map((product)=>{
                    return <CartItem product={product} key={product.id}/>
                })}
            </div>
        );
    }
}

export default Cart;