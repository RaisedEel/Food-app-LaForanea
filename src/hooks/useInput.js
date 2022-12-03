import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

function inputStateReducer(state, action) {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return initialInputState;
  }

  return initialInputState;
}

function useInput(cantBeEmpty, additionalConditions = []) {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  let error = '';
  if (cantBeEmpty && inputState.value.trim().length === 0) {
    error = 'El campo se encuentra vacío';
  }

  if (!error) {
    for (const element of additionalConditions) {
      if (!element.condition(inputState.value)) {
        error = element.errorMessage;
        break;
      }
    }
  }

  const valueIsValid = !error;
  error = !valueIsValid && inputState.isTouched ? error : '';

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    errorMessage: error,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useInput;
