import React, { children, useState ,createContext,useContext,useEffect} from 'react'


export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState('')
  return (
  <AuthContext.Provider value={{auth}}>
    {children}
  </AuthContext.Provider>
  )
}


