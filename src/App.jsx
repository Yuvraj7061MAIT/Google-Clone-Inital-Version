import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/Searchpage/SearchPage";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          {/* Add more routes for Shopping, Maps, etc. as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
