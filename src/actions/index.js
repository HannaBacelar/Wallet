import currenciesAPI from '../Services/currenciesAPI';

export const ACTION_EMAIL = (email) => ({ type: 'ACTION_EMAIL', email });
// export const ACTION_EXPENSES = (value) => ({ type: 'ACTION_EXPENSES', value });
export const requestAPIcurrences = (value) => ({ type: 'ACTION_CURRENCIES', value });
export const ERROR = (error) => ({ type: 'ERROR', error });

export function fetchAPI() {
  return async (dispatch) => {
    try {
      const response = await currenciesAPI();
      dispatch(requestAPIcurrences(response));
    } catch (error) {
      return error;
    }
  };
}
