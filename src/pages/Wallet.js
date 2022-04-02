import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import { fetchAPI } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencesMap } = this.props;
    currencesMap();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  currencesMap: (value) => dispatch(fetchAPI(value)),
});

Wallet.propTypes = {
  currencesMap: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
