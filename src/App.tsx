import { RotasPrincipais } from "./Routes";
import { api } from "./Service";
import GlobalStyle from "./Style/global";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center"/>
      <GlobalStyle />
      <RotasPrincipais />
    </div>
  );
}

export default App;
