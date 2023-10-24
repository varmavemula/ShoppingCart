import React from "react";


class CartItem extends React.Component{
    render () {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="product" src=""/>
                </div>
                <div className="right-block">
                    <div>Phone</div>
                    <div>RS 999</div>
                    <div>OTY: 1</div>
                    <div className="cart-item-actions">
                       { /*Buttons*/}
                       <img alt="increase" className="action-icons" src="https://www.flaticon.com/free-icon/add_992651"/>
                       <img alt="decrease" className="action-icons" src="https://www.flaticon.com/free-icon/minus_992683?term=minus&page=1&position=5&origin=search&related_id=992683"/>
                       <img alt="delete" className="action-icons" src=""/>

                    </div>
                </div>

            </div>
        );
    }
}

export default CartItem;