// firebase/FirebaseProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './firebaseConfi';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signOut: () => signOut(auth) }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
