import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./component/MainComponent";

function App() {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}

export default App;
