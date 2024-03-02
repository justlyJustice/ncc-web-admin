interface Props {
  error: string;
  visible?: boolean;
}

const ErrorMessage = ({ error, visible }: Props) => {
  if (!visible || !error) return null;

  return <small className="error">{error}</small>;
};

export default ErrorMessage;
