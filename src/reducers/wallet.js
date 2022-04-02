const INITIAL_STATE = {
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ACTION_CURRENCIES':
    return {
      ...state,
      currencies: Object.keys(action.value)
        .filter((typesCurrences) => typesCurrences !== 'USDT'),
    };
  default:
    return state;
  }
}
export default wallet;
