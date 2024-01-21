import React from "react";
import Cart from "./Cart";
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';


class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [],
      loading: true
    };
    this.db = firebase.firestore();
  }

  componentDidMount(){
    this.db.collection("products").onSnapshot(snapshot=>{
      const products = snapshot.docs.map(doc=>{
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({
        products: products,
        loading: false
      });
    });
  }


  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    const ref = this.db.collection('products').doc(products[index].id);
    ref.update({
      qty: products[index].qty+1
    })
    .then(()=>{
      console.log("success");
    })
    .catch(error=>console.log(error));
  };

  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    const ref = this.db.collection('products').doc(products[index].id);
    if (products[index].qty === 0) {
      return;
    }
    ref.update({
      qty: products[index].qty -= 1
    }).then()
    .catch(error=>console.log(error));
  };


  handleDeleteProduct = (id) => {
    const ref = this.db.collection('products').doc(id);
    ref.delete({
      ref
    }).then().catch(error=>console.log(error));
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

    totalPrice=()=>{
      const {products}=this.state;
      let priceTotal=0;
      products.map((product)=>{
        return priceTotal=priceTotal+product.qty*product.price
      });
      return priceTotal;
    };

    addProduct = ()=>{
      this.db
      .collection("products")
      .add({
        img:"",
        price:900,
        qty:3,
        title:"washing Machine"
      })
      .then(docRef=>{
        docRef.get().then(snapshot=>{
          console.log("Product has been added", snapshot.data());
        });
      })
      .catch(console.error());
    };

  render () {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <div style={{display:"inline-flex", border:'2px solid deepskyblue', margin:2, background:"grey"}}>
          <button onClick={this.addProduct} style={{background:"grey"}}>
            <img style={{height:25, background:"white", borderRadius:6.5}}src="https://static.vecteezy.com/system/resources/previews/010/160/090/non_2x/add-icon-sign-symbol-design-free-png.png" alt="AddProduct"></img>
          </button>
          <div style={{fontSize:30, alignSelf:"center"}}>Add Product</div>
        </div>
        <Cart
          
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{padding:10, fontSize:20}}>Total: {this.totalPrice()}</div>
      </div>
    );
  }
}

export default App;
