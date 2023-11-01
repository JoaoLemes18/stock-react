import { createContext, useState, ReactNode } from "react";
import propTypes from "prop-types";

export const StockContext = createContext({});

StockContextProvider.propTypes = {
  children: propTypes.node,
};

export function StockContextProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("react-stock");
    if (!storedItems) return [];
    const parsedItems = JSON.parse(storedItems);
    parsedItems.forEach((item) => {
      item.createdAt = new Date(item.createdAt);
      item.updatedAt = new Date(item.updatedAt);
    });
    return parsedItems;
  });

  // Add itens
  const addItem = (item: ItemType) => {
    setItems((currentState: ItemType[]) => {
      const updatedItems = [item, ...currentState];
      localStorage.setItem("react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const stock = {
    items,
    addItem,
  };

  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}

type ItemType = {
  id: number;
  name: string;
};
