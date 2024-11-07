import Sidebar from "./screenDiv/Sidebar.js";
import Main from "./screenDiv/Main.js";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <Main isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
    </div>
  );
}
export default App;