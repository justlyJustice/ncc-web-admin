import { useState } from "react";

const useSubmit = (submitFunc: Function) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (...funcParams) => {
    setIsSubmitting(true);
    const res = await submitFunc(...funcParams);
    setIsSubmitting(false);

    if (!res) {
      setIsError(true);
      return setErrorMessage("Server connection error!");
    }

    if (!res.ok) {
      setIsError(true);
      setErrorMessage(res?.data?.error);

      return setTimeout(() => {
        setIsError(false);
        setErrorMessage("false");
      }, 5000);
    }

    setIsError(false);
    setSuccess(true);
    setErrorMessage("");

    return res;
  };

  return { isSubmitting, isError, errorMessage, submit, success };
};

export default useSubmit;
