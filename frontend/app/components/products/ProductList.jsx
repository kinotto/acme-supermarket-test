import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductTile from './ProductTile';
import PropTypes from 'prop-types';
import {
  FetchProductsRequest
} from '../../actions';

class IdeaList extends Component {
  componentWillMount() {
    this.props.FetchProductsRequest();
  }
  render() {
    return (
      <div>
        <ProductTile/>
      </div>
    );
  }
}

IdeaList.propTypes = {
  'products': PropTypes.object,
  'FetchProductsRequest': PropTypes.func
};

const mapStateToProps = state => {
  return {
    'ideas': state.get('products')
  };
};
export default connect(mapStateToProps, {
  FetchProductsRequest
})(IdeaList);
