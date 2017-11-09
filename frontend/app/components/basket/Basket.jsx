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
