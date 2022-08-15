import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";

function App(props) {

//   let postsData = [
//     { id: 1, message: "First post", likeCount: 10 },
//     { id: 2, message: "Second post", likeCount: 12 }
// ]

  return (
    <BrowserRouter>
      <div className="app_wraper">
        <Header />
        <Navbar />
        <div className="app_wraper_content">
          <Routes>
            <Route path="/profile" element={<Profile postsData={props.postsData}/>} />
            <Route path="/dialogs/*" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
