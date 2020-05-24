import React, { createContext, useContext, useState, useEffect } from 'react';
import { FirebaseContext } from './FirebaseContext';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const firebase = useContext(FirebaseContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (!authUser) {
        setUser(null);
        return;
      }

      const dbUser = firebase.firestore().collection('users').doc(authUser.uid);

      dbUser.get().then((doc) => {
        if (!doc.exists) {
          const dbUserTemplate = { ideas: [] };
          dbUser.set(dbUserTemplate);
        }

        dbUser.onSnapshot((snapshot) =>
          setUser({ ...authUser, ...snapshot.data() })
        );
      });
    });

    return () => unsubscribe();
  }, [firebase]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
