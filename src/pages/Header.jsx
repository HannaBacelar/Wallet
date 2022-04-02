import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';

export class Header extends React.Component {
  render() {
    const { emailState } = this.props;
    return (
      <header className="header">
        <p
          data-testid="email-field"
        >
          Email usuário:
          { emailState }
        </p>
        <p
          data-testid="total-field"
        >
          0
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>

    );
  }
}
const mapStateToProps = (state) => ({
  emailState: state.user.email,
});

Header.propTypes = {
  emailState: PropTypes.string,
}.isRequired;

// mapStateToProps é uma função que você usaria para fornecer os dados da 'loja' ao seu componente,
export default connect(mapStateToProps)(Header);
