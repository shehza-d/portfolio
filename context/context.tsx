import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  darkTheme: true,
  isLogin: null,
  testing: "contextAPI is running",
  baseURL: "https://ec9d-175-107-203-27.ngrok.io",
};
// type myContextType = {
//   darkTheme: boolean;
//   user: {};
//   isLogin: boolean | null;
//   testing: string;
//   baseURL: string;
// };

export const GlobalContext = createContext({
  state: initialState,
  dispatch: null,
});

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
