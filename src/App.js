import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const toastFunction = () => toast("Hello, this is a small, non-intrusive message!", { 
    position: "bottom-right",
    style: {
      backgroundColor: "blue",
      color: "red",
    },
    autoClose: 10000,
    closeButton: false,
   });



   const sucessToast = () => toast.success("Hello, this is a sucess message!", { 
    position: "bottom-left",
    style: {
      backgroundColor: "gray",
      color: "purple",
    },
    autoClose: 6000,
    closeButton: true,
   });



   const errorToast = () => toast.error("Hello, this is an error message!", { 
    position: "top-center",
    style: {
      backgroundColor: "gray",
      color: "orange",
    },
    autoClose: 20000,
    closeButton: true,
   });


   const infoToast = () => toast.info("Hello, this is an info message!", { 
    position: "top-left",
    style: {
      backgroundColor: "salmon",
      color: "green",
    },
    autoClose: 20000,
    closeButton: false,
   });


   const warningToast = () => toast.warning("Hello, this is a warning message!", { 
    position: "top-right",
    style: {
      backgroundColor: "yellow",
      color: "red",
    },
    autoClose: 60000000,
    closeButton: false,
   });

  return (
    <div className="App">
      <button onClick={toastFunction}>Show Toast</button>
      <button onClick={sucessToast}>Show Sucess</button>
      <button onClick={errorToast}>Show Error</button>
      <button onClick={infoToast}>Show Info</button>
      <button onClick={warningToast}>Show Warning</button>
      <ToastContainer />
    </div>
  );
}

export default App;
