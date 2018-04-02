import React from 'react';

const Context = React.createContext();
const Provider = ({ children }) => (
  <MyContext.Provider>
    {children}
  </MyContext.Provider>
);

export default Provider;
