import React, {Component} from 'react';
import {connect} from 'react-redux';
import IdeaTile from './IdeaTile';
import PropTypes from 'prop-types';
import {
  FetchIdeasRequest
} from '../../actions';

class IdeaList extends Component {
  componentWillMount() {
    this.props.FetchIdeasRequest();
  }
  render() {
    return (
      <div>
        <IdeaTile/>
      </div>
    );
  }
}

IdeaList.propTypes = {
  'ideas': PropTypes.object,
  'FetchIdeasRequest': PropTypes.func
};

const mapStateToProps = state => {
  return {
    'ideas': state.get('ideas')
  };
};
export default connect(mapStateToProps, {
  FetchIdeasRequest
})(IdeaList);
