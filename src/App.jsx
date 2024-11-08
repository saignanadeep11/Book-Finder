import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const updateOnlineStatus = () => {
    setIsOnline(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);
  return (
    <>
      <div className="alertDiv">
        {!isOnline ? (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            Lost Internet Connection!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <Header />
      <Home />
    </>
  );
}

export default App;
