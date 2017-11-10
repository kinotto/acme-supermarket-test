import React, {Component} from 'react';
import BasketTile from './BasketTile';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  FetchBasketRequest,
  FetchBasketTotalRequest,
  RemoveFromBasketRequest
} from '../../actions';

class Basket extends Component {
  componentWillMount() {
    this.props.FetchBasketRequest();
  }
  componentWillReceiveProps(newProps) {
    if (newProps.basket.get('items') !== this.props.basket.get('items')) {
      this.props.FetchBasketTotalRequest();
    }
  }
  render() {
    return (
      <div className="basket">
        <h2>Basket</h2>
        {
          this.props.basket.get('items').map(item =>
            <BasketTile
              key={item.productCode}
              item={item}
              removeItem={this.props.RemoveFromBasketRequest}
            />
          )
        }

        <hr/>
        <h3>
          Total: {this.props.basket.get('total')} £
        </h3>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    'basket': state.get('basket')
  };
};
Basket.propTypes = {
  'basket': PropTypes.object,
  'FetchBasketRequest': PropTypes.func,
  'FetchBasketTotalRequest': PropTypes.func,
  'RemoveFromBasketRequest': PropTypes.func
};

export default connect(mapStateToProps, {
  FetchBasketRequest,
  FetchBasketTotalRequest,
  RemoveFromBasketRequest
})(Basket);
