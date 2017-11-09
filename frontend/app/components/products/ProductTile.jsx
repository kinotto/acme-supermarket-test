import React, {Component} from 'react';
import PropTypes from 'prop-types';


class ProductTile extends Component {
  isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  changeQuantity(evt, product) {
    if (this.isNumber(evt.target.value) || evt.target.value === '') {
      product.quantity = evt.target.value;
      this.setState({});
    }
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
        <div className="productTile__input">
          <input
            type="text"
            value={product.quantity || 1}
            onChange={e => this.changeQuantity(e, product)}
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
