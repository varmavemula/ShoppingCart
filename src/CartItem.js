import React from "react";


class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            title:"Mobile-phone",
            price:999,
            Qnt:1,
            img:''
        }
        
    }
    render () {
        return (
            <div className="cart-item">
                <div className="left-block">
                    {/*we can either use this.state.title, this.state.price and so on or we can call all the variables first then use simply title, price, Qnt like this.*/}
                    {/*By simply creating this "const {title,price,Qnt}=this.state just below the render option*/}
                    <img alt="product" src={this.state.img}/>
                </div>
                <div className="right-block">
                    <div>{this.state.title}</div>
                    <div>RS {this.state.price}</div>
                    <div>QTY: {this.state.Qnt}</div>
                    <div className="cart-item-actions">
                       { /*Buttons*/}
                       <img alt="increase" className="action-icons" src="https://banner2.cleanpng.com/20180610/eau/kisspng-plus-and-minus-signs-clip-art-5b1d241b5e4aa4.7318136215286364433862.jpg"/>
                       <img alt="decrease" className="action-icons" src="https://banner2.cleanpng.com/20180425/dow/kisspng-plus-and-minus-signs-subtraction-plus-minus-sign-m-minus-5ae07899248a12.0382096915246603771497.jpg"/>
                       <img alt="delete" className="action-icons" src="https://e7.pngegg.com/pngimages/836/813/png-clipart-web-application-computer-icons-delete-icon-game-text.png"/>

                    </div>
                </div>

            </div>
        );
    }
}

export default CartItem;