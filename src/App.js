import logo from "./logo.svg";
import { ToastContainer, toast, Flip, Bounce, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const info = () => {
    toast.info("This is where we provide Info", {
      theme: "dark",
      position: "top-center",
    });
  };

  const success = () => {
    toast.success("This was successful", {
      theme: "dark",
      transition: Flip,
      position: "top-center",
    });
  };

  const warning = () => {
    toast.warning("Warning Message", {
      theme: "colored",
      transition: Zoom,
      position: "bottom-center",
    });
  };

  const error = () => {
    toast.error("Error Message", {
      theme: "dark",
      transition: Flip,
      position: "bottom-center",
    });
  };

  return (
    <div className="App">
      <ToastContainer />
      <button onClick={info}> Info </button>
      <button onClick={success}> Success </button>
      <button onClick={warning}> Warning </button>
      <button onClick={error}> Error </button>
    </div>
  );
}

export default App;
