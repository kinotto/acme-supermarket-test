import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductTile from './ProductTile';
import PropTypes from 'prop-types';
import {
  FetchProductsRequest,
  AddToBasketRequest
} from '../../actions';

class IdeaList extends Component {
  componentWillMount() {
    this.props.FetchProductsRequest();
  }
  render() {
    return (
      <div className="productList">
        <h2>Product list </h2>
        {
          this.props.products.map(
            product =>
              <ProductTile
                key={product.productCode}
                product={product}
                addToBasket={this.props.AddToBasketRequest}
              />
          )
        }
      </div>
    );
  }
}

IdeaList.propTypes = {
  'products': PropTypes.object,
  'FetchProductsRequest': PropTypes.func,
  'AddToBasketRequest': PropTypes.func
};

const mapStateToProps = state => {
  return {
    'products': state.get('products')
  };
};
export default connect(mapStateToProps, {
  FetchProductsRequest,
  AddToBasketRequest
})(IdeaList);
