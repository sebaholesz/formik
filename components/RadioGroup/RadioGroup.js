import React from "react";
import { RadioGroupStyled } from "./RadioGroup.style.js";
import { useField, Field } from "formik";

const RadioGroup = ({ label, required, options, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <RadioGroupStyled>
      <label>
        {label}
        {required && <b>*</b>}
      </label>
      <div className="radio-options">
        {options.map(({ label, value }) => (
          <div key={value} className="option">
            <Field
              name={props.name}
              value={value}
              type="radio"
            />
            <label>{label}</label>
          </div>
        ))}
      </div>
      <div className="error-box">
        {meta.error && meta.touched ? (
          <span className="error-message">{meta.error}</span>
        ) : null}
      </div>
    </RadioGroupStyled>
  );
};

export default RadioGroup;
