"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import ErrorMessage from "@/components/ErrorMessage";
import FormHeader from "@/components/FormHeader";
import { Form, FormField, SubmitButton } from "@/components/forms";

import authService from "@/services/auth";

import useAuth from "@/hooks/useAuth";
import useSubmit from "@/hooks/useSubmit";

import withAuth from "@/hoc/withAuth";

import validationSchema from "@/validation/form.schema";

function Login() {
  const router = useRouter();
  const { user } = useAuth();

  const {
    errorMessage,
    isError,
    isSubmitting,
    submit: login,
    success,
  } = useSubmit(authService.login);

  const handleSubmit = async (values) => {
    const res = await login(values);

    if (res.ok)
      setTimeout(() => {
        router.replace("/dashboard");
      }, 1000);
  };

  return (
    <div className="wrapper">
      <div className="form-contain">
        <FormHeader
          title="Sign In, FGiant Comm Web"
          description="Sign in to continue to admin dashboard."
        />

        <ErrorMessage error={errorMessage} visible={isError} />

        <div className="form">
          <Form
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <FormField
              name="email"
              placeholder="Enter email address"
              label="Email Address"
            />

            <FormField
              label="Password"
              name="password"
              placeholder="Enter password"
              type="password"
            />

            <SubmitButton
              className={`form-btn ${success && "bg-success"}`}
              type={`submit`}
            >
              {isSubmitting ? "Submitting" : "Sign in"}
            </SubmitButton>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Login);
