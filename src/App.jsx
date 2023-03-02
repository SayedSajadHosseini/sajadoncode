import "./App.css";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="mx-auto max-w-3xl text-gray-500">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
