import { useState } from "react";


export function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value, validationMessage, form } = e.target;
    setValues((oldValues) => ({ ...oldValues, [name]: value }));
    setErrors((oldErrors) => ({ ...oldErrors, [name]: validationMessage }));
    setIsValid(form.checkValidity());
  };

  const setValue = (name, value) => {
    setValues((oldValues) => ({ ...oldValues, [name]: value }));
  };

  return { values, errors, isValid, handleChange, setValue };
}
