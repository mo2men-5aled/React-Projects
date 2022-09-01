import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      hohohohhohohoho
      <br />
      <Link to="/pagetwo">jump</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      hahahahahahahaha
      <br />
      <Link to="/">go back</Link>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PageOne />} />
          <Route path="/pagetwo" element={<PageTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
