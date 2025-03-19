import React, { useState, Suspense } from "react";
import { RegisterModel } from "@/types/modules/auth";
import LoadingSpinner from "../../../../components/atoms/LoadingSpinner";
import { useSignupMutation } from "../../hooks/mutation/useSignupMutation";
import { RegisterUserInput } from "../../types/mutation";

const SignupComponent = React.lazy(() => import("./components/Signup"));

const SignupContainer: React.FC = () => {
  const [requestData, setRequestData] = useState<RegisterUserInput>({
    username: null,
    email: null,
    password: null,
  });

  const { signUp, loading } = useSignupMutation();

  const handleInputs = (value: string, key: keyof RegisterModel) => {
    setRequestData((prevData) => ({
      ...prevData,
      [key]: value || null,
    }));
  };

  const register = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signUp(requestData);
    } catch (e) {
      console.error("Registration error:", e);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SignupComponent onRegister={register} onHandleInputs={handleInputs} />
    </Suspense>
  );
};

export default React.memo(SignupContainer);
