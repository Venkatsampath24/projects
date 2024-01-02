import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import WatchList from "./Components/WatchList";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          ></Route>
          <Route path="/WatchList" element={<WatchList />} />
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
