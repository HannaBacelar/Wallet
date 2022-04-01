import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ACTION_EMAIL } from '../actions/index';
// import Rotas from './Rotas';

const INITIAL_STATE = {
  email: '',
  senha: '',
  botao: true,
};

class Login extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  verificaInput = ({ target }) => {
    const { name, value } = target; // verifica se os valores de senha e email se adequam a funcao abaixo
    this.setState({
      [name]: value,
    }, this.verificaSenhaEBotao);
  }

  verificaSenhaEBotao = () => {
    const { email, senha } = this.state;
    const regexEmail = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+/i;
    const number6 = 6;
    if (regexEmail.test(email) && senha.length >= number6) {
      this.setState({
        botao: false,
      });
    } else {
      this.setState({
        botao: true,
      });
    }
  }

  redirectCarteira = () => {
    const { emailmap, history } = this.props;
    const { email } = this.state;
    emailmap(email);
    history.push('/carteira');
  }

  render() {
    const { email, senha, botao } = this.state;
    return (
      <div>

        <form>
          <label htmlFor="email-input">
            <input
              data-testid="email-input"
              type="email"
              name="email"
              value={ email }
              id="email-input"
              onChange={ this.verificaInput }
            />
          </label>
          <label htmlFor="senha-input">
            <input
              data-testid="password-input"
              type="password"
              name="senha"
              value={ senha }
              id="senha-input"
              onChange={ this.verificaInput }
            />
          </label>
          <button
            type="button"
            id="botao"
            disabled={ botao }
            onClick={ this.redirectCarteira }

          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailmap: (email) => dispatch(ACTION_EMAIL(email)),
});

Login.propTypes = {
  emailmap: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

// https://stackoverflow.com/questions/45764746/react-proptypes-objectof-vs-shape#:~:text=on%20this%20post.-,PropTypes.,are%20all%20the%20same%20type.&text=(PropTypes.number)-,PropTypes.,and%20may%20represent%20different%20types

export default connect(null, mapDispatchToProps)(Login);
