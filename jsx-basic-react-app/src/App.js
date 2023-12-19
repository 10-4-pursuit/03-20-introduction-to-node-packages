import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        theme="light"

      
      />

      <button onClick={() => toast("Default Toast")}>Default Toast</button>
      <button onClick={() => toast.success("Success Toast")}>  Success Toast</button>
      <button onClick={() => toast.error("Error Toast")}>Error Toast</button>
      <button onClick={() => toast.warn("Warning Toast")}>Warning Toast</button>
      

    

    </div>
  );
}

export default App;
