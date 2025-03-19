import React, { useState, Suspense } from "react";
import LoadingSpinner from "../../../../components/atoms/LoadingSpinner";
import { LoginUserInput } from "../../types/mutation";
import { useLoginQuery } from "../../hooks/query/useLoginQuery";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/core/store/useAuthStore";

const LoginComponent = React.lazy(() => import("./components/Login"));

const LoginContainer: React.FC = () => {
  const [requestData, setRequestData] = useState<LoginUserInput>({
    email: null,
    password: null,
  });

  const navigate = useNavigate();
  // const { login, loading } = useLoginQuery();
  const { login, loading, user }: any = useAuthStore();
  console.warn("user: ", user);
  
  const handleInputs = (value: string, key: keyof LoginUserInput) => {
    setRequestData((prevData) => ({
      ...prevData,
      [key]: value || null,
    }));
  };

  const onLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(requestData);
      navigate("/dashboard");
    } catch (e) {
      console.error("Login error:", e);
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
      <LoginComponent onLogin={onLogin} onHandleInputs={handleInputs} />
    </Suspense>
  );
};

export default React.memo(LoginContainer);
