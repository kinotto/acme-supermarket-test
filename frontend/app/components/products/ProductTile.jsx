import React, {Component} from 'react';
import PropTypes from 'prop-types';


class ProductTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'quantity': 1
    };
  }
  changeQuantity(product, isAdd) {
    if (isAdd) {
      product.quantity = (product.quantity || 0) + 1;
    } else if (product.quantity > 1) {
      product.quantity = (product.quantity || 0) - 1;
    }
    this.setState({'quantity': product.quantity});
  }
  render() {
    let {product, addToBasket} = this.props;

    return (
      <div className="productTile">
        <div className="productTile__name">
          {product.name}
        </div>
        <div className="productTile__price">
          {(product.price / 100).toFixed(2) } £
        </div>
        <div className="productTile__quantity">
          <img
            src="../../../images/minus.png"
            onClick={ () => this.changeQuantity(product, false)}
          />
          <span>{this.state.quantity}</span>
          <img
            src="../../../images/plus.ico"
            onClick={ () => this.changeQuantity(product, true)}
          />
        </div>
        <div
          className="productTile__buy"
          onClick={() => addToBasket(product)}>

          <img src="../../../images/cart.png" title="add to cart"/>

        </div>
      </div>
    );
  }
}

ProductTile.propTypes = {
  'product': PropTypes.object,
  'addToBasket': PropTypes.func
};
export default ProductTile;
