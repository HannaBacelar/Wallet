const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ACTION_CURRENCIES':
    return {
      ...state,
      currencies: Object.keys(action.value)
        .filter((typesCurrences) => typesCurrences !== 'USDT'),
    };
  case 'ACTION_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.value],
    };
  default:
    return state;
  }
}
export default wallet;
