import { useState } from "react";
import constate from "constate";

export const [AuthContextProvider, useAuthContext] = constate(() => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return { isAuthenticated, setIsAuthenticated };
});
