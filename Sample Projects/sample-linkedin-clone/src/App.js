import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./features/Feed/Feed";
import Header from "./features/Header/Header";
import Login from "./features/Login/Login";
import Sidebar from "./features/Sidebar/Sidebar";
import { login, logout, selectUser } from "./features/userSlice";
import Widgets from "./features/Widgets/Widgets";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid:userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
          
        </div>
      )}
    </div>
  );
}

export default App;
