import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ACTION_EXPENSES } from '../actions/index';
import currenciesAPI from '../Services/currenciesAPI';

const alimentacao = 'Alimentação';

const INITIAL_STATE = {
  id: 0,
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: alimentacao,
  expenses: { },
};

class Form extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

 handleChange = ({ target }) => {
   const { name, value } = target;
   this.setState({
     [name]: value,
   });
 }

   handleClick = async () => {
     const { expensesValue } = this.props;
     const api = await currenciesAPI();
     const { id, value, description, currency, method, tag } = this.state;
     this.setState({
       expenses: { id, value, description, currency, method, tag, exchangeRates: api },
     }, () => {
       const { expenses } = this.state;
       expensesValue(expenses);
       this.setState((estadoAnterior) => ({
         id: estadoAnterior.id + 1,
         value: 0,
         description: '',
         currency: 'USD',
         method: 'Dinheiro',
         tag: alimentacao,
       }));
     });
   }

   render() {
     const { value, description, currency, method, tag } = this.state;
     const { currenciesState } = this.props;
     return (
       <div>
         <form className="form">
           <label htmlFor="valor-input">
             valor:
             <input
               data-testid="value-input"
               type="number"
               name="value"
               value={ value }
               id="valor-input"
               onChange={ this.handleChange }
             />
           </label>
           <label htmlFor="Descrição-input">
             Descrição
             <input
               data-testid="description-input"
               type="text"
               name="description"
               value={ description }
               id="Descrição-input"
               onChange={ this.handleChange }
             />
           </label>
           <label htmlFor="currency-input">
             Moeda
             <select
               id="currency-input"
               data-testid="currency-input"
               name="currency"
               value={ currency }
               onChange={ this.handleChange }
             >
               {
                 currenciesState.map((moedas, index) => (
                   <option key={ index } value={ moedas }>
                     { moedas }
                   </option>))
               }
             </select>
           </label>
           <label htmlFor="method-input">
             Forma de Pagamento
             <select
               data-testid="method-input"
               id="method-input"
               value={ method }
               name="method"
               onChange={ this.handleChange }
             >
               <option name="dinheiro">Dinheiro</option>
               <option name="credito">Cartão de crédito</option>
               <option name="dedito">Cartão de débito</option>
             </select>
           </label>

           <label htmlFor="tag-input">
             categoria
             <select
               id="tag-input"
               data-testid="tag-input"
               name="tag"
               value={ tag }
               onChange={ this.handleChange }
             >
               <option>Alimentação</option>
               <option>Lazer</option>
               <option>Trabalho</option>
               <option>Transporte</option>
               <option>Saúde</option>
             </select>
           </label>
           <button
             type="button"
             id="botao"
             onClick={ this.handleClick }
           >
             Adicionar despesa
           </button>
         </form>
       </div>
     );
   }
}
const mapStateToProps = (state) => ({
  currenciesState: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  expensesValue: (value) => dispatch(ACTION_EXPENSES(value)),
});

Form.propTypes = {
  currenciesState: PropTypes.string,
  expensesValue: PropTypes.func,
}.isRequired;

// mapStateToProps é uma função que você usaria para fornecer os dados da 'loja' ao seu componente,
export default connect(mapStateToProps, mapDispatchToProps)(Form);
