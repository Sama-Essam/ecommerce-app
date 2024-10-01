import { createContext, useEffect, useState } from "react";

export let UserContext = createContext();

export default function UserContextProvider(props) {
  const [userlogin, setuserlogin] = useState(
    localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null
  );

  return (
    <UserContext.Provider value={{ userlogin, setuserlogin }}>
      {props.children}
    </UserContext.Provider>
  );
}
