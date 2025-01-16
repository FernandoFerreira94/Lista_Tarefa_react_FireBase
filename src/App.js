import { GlobalStyled } from "./GlobalStyled";
import { ToastContainer } from "react-toastify";
import RoutesApp from "./Routes";

function App() {
  return (
    <div>
      <RoutesApp />
      <ToastContainer autoClose={1500} />
      <GlobalStyled />
    </div>
  );
}

export default App;
