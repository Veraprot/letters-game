import validator from 'validator';
import isEmpty from './is-empty';

const validateInput = (data) => {
  let errors = {};

  data = !isEmpty(data) ? data : '';

  if (data.selected.length < 3) {
    Object.assign(errors, {handle: 'Selection needs to be at least 3 characters'})
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateInput