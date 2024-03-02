import { ChangeEvent } from "react";

interface Props {
  name: string;
  label?: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
}

const Input = ({
  name,
  label,
  placeholder,
  onChange,
  value,
  type,
  ...otherProps
}: Props) => {
  return (
    <div className="form-field">
      {label && <label htmlFor={name}>{label}</label>}

      <input
        name={name}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type ? type : "text"}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
