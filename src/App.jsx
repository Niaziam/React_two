import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-[70px]">
        <Outlet />
      </div>
    </>
  );
}

export default App;
