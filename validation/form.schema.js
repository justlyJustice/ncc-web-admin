import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email Address"),
  password: Yup.string().required().label("Password"),
});

export default validationSchema;
