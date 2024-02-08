import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify"; 
import './App.css';

function App() {
  return (
    <div className="App">
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1>React App</h1>
      <button onClick={() => toast("Wow so easy!")}>Notify!</button>
      <button onClick={() => toast("Error", { type: "error" })}>Error</button>
      <button onClick={() => toast("Warning", { type: "warning" })}>Warning</button>
      <button onClick={() => toast("Info", { type: "info" })}>Info</button>
      <button onClick={() => toast("Success", { type: "success" })}>Success</button>
    </div>
  );
}

export default App;
