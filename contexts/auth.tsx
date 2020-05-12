import React, { createContext, useState } from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

interface AuthContextData {
    signed: boolean
    signIn: ()=>void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export const AuthProvider: React.FC = ({ children }) => {
    const [signed, setSigned]=useState(Boolean)
    function signIn(){
        signed?setSigned(false):setSigned(true);
    }
    return <AuthContext.Provider value={{ signed, signIn }} >
        {children}
    </AuthContext.Provider>;
}

export default AuthContext;