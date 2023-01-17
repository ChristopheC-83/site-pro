import { createContext } from "react";

export const ProContext = createContext();

const ProContextProvider = (props) => {

    const textContext = "Bonjour le context !"







return (
    <ProContext.Provider value={{textContext}}>
      {props.children}
    </ProContext.Provider>
  );
};

export default ProContextProvider;



