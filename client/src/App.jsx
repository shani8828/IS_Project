// src/App.jsx
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutesConfig from "./routes";
import {Toaster} from "react-hot-toast";
function App() {
  return (
    <div className="min-h-[100vh] bg-white">
      <Toaster position="top-right" reverseOrder={false} />
      <Header/><RoutesConfig/>
      
      <Footer/>
    </div>
  );
}

export default App;