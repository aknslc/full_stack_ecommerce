import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);



    const values = {
        user,
        setUser,

    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return <AuthContext.Provider value={values}> {children}</AuthContext.Provider>;

}



const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth };