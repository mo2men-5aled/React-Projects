import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const PageTwo = () => {
  return <div>Page Two</div>;
};

const PageOne = () => {
  return <div>Page One s</div>;
};

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
