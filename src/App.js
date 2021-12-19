import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "main/Main";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Main />
    </BrowserRouter>
  );
}

export default App;
