import React from "react";
import { CheckboxStyled } from "./Checkbox.style.js";
import { useField } from "formik";

const Checkbox = ({ label, required, ...props }) => {
  const [field, meta] = useField(props);

  console.log(field);
  console.log(meta);

  return (
    <CheckboxStyled>
      <div className="checkbox-wrapper">
        <input
          className={meta.error && meta.touched ? "error checkbox" : "checkbox"}
          type="checkbox"
          {...field}
          {...props}
        />
        <label>
          {label}
          {required && <b>*</b>}
        </label>
      </div>
      <div className="error-box">
        {meta.error && meta.touched ? (
          <span className="error-message">{meta.error}</span>
        ) : null}
      </div>
    </CheckboxStyled>
  );
};

export default Checkbox;
