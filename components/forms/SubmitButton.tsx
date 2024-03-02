import { useFormikContext } from "formik";
import Button from "../Button";

const SubmitButton = ({
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  type?: string;
}) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button onClick={handleSubmit} {...props}>
      {children}
    </Button>
  );
};

export default SubmitButton;
