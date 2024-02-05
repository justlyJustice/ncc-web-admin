"use client";

import authService from "@/services/auth";
import { createContext, useState } from "react";

export const AppContext = createContext(authService.getUser());

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(authService.getUser());

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
