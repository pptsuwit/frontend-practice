"use client";
import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from "react";
import { message } from "antd";
import { NoticeType } from "antd/es/message/interface";

interface ContextProps {
  dataMessage: string;
  setDataMessage: Dispatch<SetStateAction<string>>;
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

  const [dataMessage, setDataMessage] = useState<string>("");
  const contextValue = useMemo(
    () => ({
      messageApi,
      setDataMessage,
      dataMessage,
    }),
    [api, setDataMessage, dataMessage]
  );
  return (
    <GlobalContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
