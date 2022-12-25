import React, { createContext, useContext, useReducer } from "react";
import { MainReducer } from "./reducer";

type StateInterface = {
  theme: string | undefined;
};

const initialState = {
  theme: "light",
};

export const GlobalContext = createContext<{
  state: StateInterface;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export function Wrapper({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(MainReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  return context;
}
