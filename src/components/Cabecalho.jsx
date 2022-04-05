import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Cabecalho extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        {/* https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/table */}
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((element) => {
              const { id,
                value,
                description,
                currency,
                method,
                tag,
                exchangeRates } = element;
              const nameCurrency = exchangeRates[currency].name.split('/');
              const valorConversao = (exchangeRates[currency].ask * value).toFixed(2);
              const askvalue = exchangeRates[currency].ask;
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{Number(value).toFixed(2)}</td>
                  <td>{nameCurrency[0]}</td>
                  <td>{Number(askvalue).toFixed(2)}</td>
                  <td>{valorConversao}</td>
                  <td>Real</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>

    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
Cabecalho.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
export default connect(mapStateToProps)(Cabecalho);
