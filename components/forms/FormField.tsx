import { useFormikContext } from "formik";

import Input from "../Input";
import ErrorMessage from "../ErrorMessage";
import { ChangeEvent } from "react";

interface Props {
  name: string;
  placeholder?: string;
  type?: string;
  label?: string;
}

const FormField = ({ name, placeholder, type, ...props }: Props) => {
  const { values, errors, setFieldValue, touched } = useFormikContext();

  return (
    <>
      <Input
        name={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFieldValue(name, e.target.value)
        }
        placeholder={placeholder}
        type={type ? type : "text"}
        value={values[name]}
        {...props}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
