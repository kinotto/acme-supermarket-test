import React, {Component} from 'react';
import Basket from './basket/Basket';
import ProductList from './products/ProductList';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <ProductList />
          <Basket />
        </div>
      </div>
    );
  }
}
