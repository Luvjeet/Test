import React from "react";

// importing Styles
import GlobalStyles from "./components/GlobalStyles";

// importing components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
    </div>
  );
}

export default App;
