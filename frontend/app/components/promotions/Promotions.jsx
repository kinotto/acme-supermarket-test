import React from 'react';
import PropTypes from 'prop-types';

const Promotions = ({items}) => {
  return (
    items.some(item => item.promotion)
      ? (
        <h2>
          Promotions


        </h2>
      )
      : ''
  );
};

Promotions.propTypes = {
  'items': PropTypes.object
};

export default Promotions;
