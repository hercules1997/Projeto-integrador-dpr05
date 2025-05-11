import PropTypes from "prop-types";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const putUserData = (userInfo) => {
    setUserData(userInfo);
    localStorage.setItem("sacAdimax:users", JSON.stringify(userInfo));
  };

  const logout = () => {
    localStorage.removeItem("sacAdimax:users");
    setUserData({});
  };

  useEffect(() => {
    const loadUserData = () => {
      const clientInfo = localStorage.getItem("sacAdimax:users");
      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };
    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ putUserData, userData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used with UserContext");
  }
  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
