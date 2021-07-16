import React from "react";
import { InputStyled } from "./Input.style.js";
import { useField } from "formik";

const Input = ({ label, required, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <InputStyled>
      <label>
        {label}
        {required && <b>*</b>}
      </label>
      <input
        className={[meta.error && meta.touched ? "error" : "", props.type].join(" ")}
        {...field}
        {...props}
      />
      <div className="error-box">
        {meta.error && meta.touched ? (
          <span className="error-message">{meta.error}</span>
        ) : null}
      </div>
    </InputStyled>
  );
};

export default Input;
