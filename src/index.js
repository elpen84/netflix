import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./app";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./context/firebase";
import { seedDatabase } from "./seed";

const config = {
  apiKey: "AIzaSyARcYZ2K4FKMEO8MKsrrnbmkv8QxydIvUg",
  authDomain: "netflix-eebbe.firebaseapp.com",
  databaseURL: "https://netflix-eebbe.firebaseio.com",
  projectId: "netflix-eebbe",
  storageBucket: "netflix-eebbe.appspot.com",
  messingSenderId: "196242068527",
  appId: "1:196242068527:web:d9b495b4cc082c044ae2da",
};

const firebase = window.firebase.initializeApp(config);


ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,

  document.getElementById("root")
);
