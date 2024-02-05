import { useFormikContext } from "formik";
import Button from "../Button";

const SubmitButton = ({ children, success, ...props }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button onClick={handleSubmit} success={success} {...props}>
      {children}
    </Button>
  );
};

export default SubmitButton;
