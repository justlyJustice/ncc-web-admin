const Input = ({ name, label, placeholder, type, ...otherProps }) => {
  return (
    <div className="form-field">
      {label && <label htmlFor={name}>{label}</label>}

      <input
        name={name}
        id={name}
        placeholder={placeholder}
        type={type ? type : "text"}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
