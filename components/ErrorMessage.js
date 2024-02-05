const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <small className="error">{error}</small>;
};

export default ErrorMessage;
