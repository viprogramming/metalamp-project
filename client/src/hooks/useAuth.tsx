import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IAuthContext {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<Boolean>>;
  setUser: Dispatch<SetStateAction<{ name: string }>>;
  user: {
    name: string;
  };
}

const ititialValue = {
  isLogin: false,
  user: { name: "" },
  setIsLogin: () => {},
  setUser: () => {},
};

const AuthContext = createContext<IAuthContext>(ititialValue);

export const AuthProvider = (props: any) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({ name: "" });

  const value = { isLogin, setIsLogin, user, setUser };
  return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = () => useContext<IAuthContext>(AuthContext);
