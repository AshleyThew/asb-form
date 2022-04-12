import React, { useContext, useState } from "react";

const UserContext = React.createContext({user: {firstName: "", lastName: ""}});
const UserConsumer = UserContext.Consumer;

const UserProvider = (props: any) => {
    const [user, setUser] = useState({user: {firstName: "Gordon", lastName: "Ramsey"}});
  
    const values = React.useMemo(() => ({ user, setUser }), [user, setUser]);
  
    return (
      <UserContext.Provider value={values.user}>{props.children}</UserContext.Provider>
    );
  };
  
  const GetUser = () => {
    const context = useContext(UserContext);
  
    if (context === undefined) {
      throw new Error("Invalid use of user context.");
    }
  
    return context;
  };
  
  export { UserProvider, UserConsumer, GetUser };
  