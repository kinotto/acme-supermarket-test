import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BasketTile extends Component {
  attachHoverHandler() {
    let defaultBG = this.parent.style.background;
    this.child.onmouseover = () => {
      this.parent.style.background = '#ff6666';
    };
    this.child.onmouseout = () => {
      this.parent.style.background = defaultBG;
    };
  }
  componentDidMount() {
    this.attachHoverHandler();
  }
  render() {
    let {item, removeItem} = this.props;
    return (
      <div
        className="basketTile"
        ref={el => {
          this.parent = el;
        }}>
        <div className="basketTile__name">
          {item.name}
        </div>
        <div className="basketTile__price">
          {(item.price / 100).toFixed(2) } £
        </div>
        <div className="basketTile__quantity">
          {item.quantity}
        </div>
        <div
          className="basketTile__remove"
          ref={el => {
            this.child = el;
          }}
          onClick={ () => removeItem(item)}>
          <img src="../../../images/remove.png" />
        </div>
      </div>
    );
  }
}

BasketTile.propTypes = {
  'item': PropTypes.object,
  'removeItem': PropTypes.func
};

export default BasketTile;