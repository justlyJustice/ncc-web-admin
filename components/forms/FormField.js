import * as PropTypes from "prop-types";
import { useFormikContext } from "formik";

import Input from "../Input";
import ErrorMessage from "../ErrorMessage";

const FormField = ({ name, placeholder = "", type, ...props }) => {
  const { values, errors, setFieldValue, touched } = useFormikContext();

  return (
    <>
      <Input
        name={name}
        onChange={(e) => setFieldValue(name, e.target.value)}
        placeholder={placeholder}
        type={type ? type : "text"}
        value={values[name]}
        {...props}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormField;
