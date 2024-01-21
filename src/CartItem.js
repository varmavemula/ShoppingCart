import React from "react";


const CartItem=(props)=>{
    const {title,price,qty,img} = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;
    return(
        <div className="cart-item" style={styles.cartitem}>
          <div className="left-block">
            <img style={styles.image} alt="item" src={img}/>
          </div>
          <div className="right-block">
            <div style={ { fontSize: 25 } }>{title}</div>
            <div style={ { color: '#777' } }>Rs {price} </div>
            <div style={ { color: '#777' } }>Qty: {qty} </div>
            <div className="cart-item-actions">
              {/* Buttons */}
              <img
                alt="Increase"
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                onClick={() => onIncreaseQuantity(product)}
              />
              <img
                alt="Decrease"
                className="action-icons"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Flat_minus_icon.svg/768px-Flat_minus_icon.svg.png"
                onClick={() => onDecreaseQuantity(product)}
              />
              <img
                alt="Delete"
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                onClick={() => onDeleteProduct(product.id)}
              />
            </div>
          </div>
        </div>
    );
  }
  
  const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 0,
      background: '#ccc',
      
    },
    cartitem:{
      border:'2px solid grey',
      height:'inherit',
      width:'50vw',
    }
  }
  
  export default CartItem;  
    