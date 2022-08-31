import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PageOne />} />
          <Route path="/pageTwo" element={<PageTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
