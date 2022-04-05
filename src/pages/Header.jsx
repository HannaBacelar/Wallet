import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';

class Header extends React.Component {
  converteValor = () => {
    const { expenses } = this.props;
    let valorTotal = 0;
    if (expenses.length > 0) {
      expenses.forEach((item) => {
        const valorConversao = item.exchangeRates[item.currency].ask;
        valorTotal += item.value * valorConversao;
      });
    }
    return valorTotal.toFixed(2);
  }

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
          { this.converteValor() }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  emailState: PropTypes.string,
  expenses: PropTypes.func,
}.isRequired;

// mapStateToProps é uma função que você usaria para fornecer os dados da 'loja' ao seu componente,
export default connect(mapStateToProps)(Header);
