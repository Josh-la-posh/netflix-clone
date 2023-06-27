import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./component/MainComponent";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
