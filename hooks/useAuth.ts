import authService from "@/services/auth";

const useAuth = () => {
  const user = authService.getUser();

  const logOut = () => {
    authService.logOut();
  };

  return { user, logOut };
};

export default useAuth;
