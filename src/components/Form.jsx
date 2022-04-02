import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class form extends React.Component {
  render() {
    const { currenciesState } = this.props;
    return (
      <div>
        <form className="form">
          <label htmlFor="valor-input">
            <input
              data-testid="value-input"
              type="number"
              name="valor"
              id="valor-input"
            />
            valor:
          </label>
          <label htmlFor="Descrição-input">
            <input
              data-testid="description-input"
              type="text"
              name="descrição"
              id="Descrição-input"
            />
            Descrição
          </label>
          <label htmlFor="currency-input">
            Moeda
            <select id="currency-input" data-testid="currency-input">
              {
                currenciesState.map((moedas, index) => (
                  <option key={ index } value={ moedas }>
                    { moedas }
                  </option>))
              }
            </select>
          </label>
          <label htmlFor="method-inpot">
            Método de pagamento:
            <select data-testid="method-input">
              <option>Dinheiro</option>
              <option>Cartão de crédito </option>
              <option> Cartão de débito </option>
            </select>
          </label>
          <label htmlFor="tag-input">
            categoria
            <select data-testid="tag-input">
              <option> Alimentação </option>
              <option>Lazer</option>
              <option>Trabalho </option>
              <option>Transporte </option>
              <option>Saúde </option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currenciesState: state.wallet.currencies,
});

form.propTypes = {
  currenciesState: PropTypes.string,
}.isRequired;

// mapStateToProps é uma função que você usaria para fornecer os dados da 'loja' ao seu componente,
export default connect(mapStateToProps)(form);
