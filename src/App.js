import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <div className="app_wraper">
      <Header />
      <Navbar />

      <div className="app_wraper_content">
        <Routes>

          <Route path="/profile" element={<Profile
            profilePage={props.appState.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />}
          />

          <Route path="/dialogs/*" element={<Dialogs
            dialogsData={props.appState.dialogsPage.dialogsData}
            messagesData={props.appState.dialogsPage.messagesData} />} />
          <Route path="/news" element={<News />}
          />

        </Routes>
      </div>

    </div>
  );
}

export default App;
