// src/App.jsx
import RoutesConfig from "./routes";
import {Toaster} from "react-hot-toast";
function App() {
  return (
    <div className="min-h-[100vh] bg-white">
      <Toaster position="top-right" reverseOrder={false} />
      <RoutesConfig />
    </div>
  );
}

export default App;