import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './products/ProductList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ProductList />
        <Footer/>
      </div>
    );
  }
}
