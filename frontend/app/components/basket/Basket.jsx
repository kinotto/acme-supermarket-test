import React, {Component} from 'react';
import BasketTile from './BasketTile';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  FetchBasketRequest,
  RemoveFromBasketRequest
} from '../../actions';

class Basket extends Component {
  componentWillMount() {
    this.props.FetchBasketRequest();
  }
  render() {
    return (
      <div className="basket">
        <h2>Basket</h2>
        {
          this.props.items.map(item =>
            <BasketTile
              key={item.productCode}
              item={item}
              removeItem={this.props.RemoveFromBasketRequest}
            />
          )
        }
        <hr/>
        <h3>
          Total:
          { ' ' +
            this.props.items.reduce(
              (sum, item) => +(sum + (item.price / 100) * item.quantity).toFixed(2), 0
            )
          } £
        </h3>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    'items': state.get('basket')
  };
};
Basket.propTypes = {
  'items': PropTypes.object,
  'FetchBasketRequest': PropTypes.func,
  'RemoveFromBasketRequest': PropTypes.func
};

export default connect(mapStateToProps, {
  FetchBasketRequest,
  RemoveFromBasketRequest
})(Basket);
