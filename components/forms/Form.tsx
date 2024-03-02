import { Formik } from "formik";

const AppForm = ({ children, onSubmit, initialValues, validationSchema }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
