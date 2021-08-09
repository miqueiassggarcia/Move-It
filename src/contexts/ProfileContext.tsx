import Cookies from "js-cookie";
import { createContext, ReactNode, useEffect, useState } from "react";

interface UserData {
    data: {
        avatar_url: string;
        bio: string;
        name: string;
    };
}

interface ProfileContextData {
    user: UserData;
    addUserData: (user: JSON) => void;
}

interface ProfileProviderProps {
    children: ReactNode;
  }

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({
    children
}: ProfileProviderProps) {
    const [user, setUser] = useState({} as UserData);

    useEffect(() => {
        Cookies.set('username', String(user));
      }, [user])

    function addUserData(userData) {
    setUser(userData);
  }

  return (
    <ProfileContext.Provider value={{
        user,
        addUserData,
    }}>
        {children}
    </ProfileContext.Provider>
  );
};