import React from 'react';

const Navbar = (props) => {
    return (
      <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
          <img style={styles.cartIcon} src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png" alt="cart-icon" />
          <span style={styles.cartCount}> {props.count} </span>
        </div>
      </div>
    );
  }
  
  const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20,
      background: '#4267b2',
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative',
      background: '#4267b2'

    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
  
  
  export default Navbar;