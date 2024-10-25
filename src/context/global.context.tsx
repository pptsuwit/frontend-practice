"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { message } from "antd";
import { NoticeType } from "antd/es/message/interface";

interface ContextProps {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
  messageApi: (type: NoticeType, message: string) => void;
}

const GlobalContext = createContext<ContextProps>({} as ContextProps);

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [api, contextHolder] = message.useMessage();

  const messageApi = (type: NoticeType, message: string) => {
    api.open({
      type: type,
      content: message,
    });
  };

  const [cart, setCart] = useState<Product[]>([]);
  useEffect(() => {
    // localStorage.setItem("cart", JSON.stringify(cart));
    setCart(JSON.parse(localStorage.getItem("cart") as string) || []);
  }, []);
  const contextValue = useMemo(
    () => ({
      messageApi,
      cart,
      setCart,
    }),
    [api, setCart, cart]
  );
  return (
    <GlobalContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
