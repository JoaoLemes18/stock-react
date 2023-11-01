import { createContext } from "react";
import { ReactNode } from "react";
import propTypes from "prop-types";

export const StockContext = createContext({});

StockContextProvider.propTypes = {
  children: propTypes.node,
};

export function StockContextProvider({ children }: { children: ReactNode }) {
  return <StockContextProvider>{children}</StockContextProvider>;
}
