import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { apolloClient } from "@/lib/apollo";
import { LOGIN_QUERY } from "../graphql/auth";
import { LoginUserInput } from "@/modules/auth/types/mutation";
import _get from "lodash/get";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      loading: false,
      login: async (input: LoginUserInput) => {
        try {
          set({ loading: true });
          const { data } = await apolloClient.query({
            query: LOGIN_QUERY,
            variables: { input },
          });
          console.warn(data);
          
          const loginData = _get(data, "loginUser", {});
          const user = _get(loginData, "user", {});
          const token = _get(loginData, "token", "");
          sessionStorage.setItem("token", token);
          localStorage.setItem("token", token);
          await apolloClient.clearStore();
          set({ user });
        } catch (error) {
          console.error("Login failed:", error);
        } finally {
          set({ loading: false });
        }
      },
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: "auth-session",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
