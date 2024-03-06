import './App.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Greeting from './Greeting';
import Farewell from './Farewell';

const App = () => {
  const showNotification = () => {
    toast.info("Hello, World");
  };

  const showSuccessNotification = () => {
    toast.success("Success Notification", "This is a success notification", {
      icon: "🚀"
    });
  };

  const showErrorNotification = () => {
    toast.error("Error Notification");
  }

  const showInfoNotification = () => {
    toast.info("Info Notification");
  }

  const showWarningNotification = () => {
    toast.warning("Warning Notification");
  }

  return (
    <div>
      <Greeting name="Yah-neen" />
      <Farewell />
      <button onClick={showNotification}>Show notification</button>
      <button onClick={showSuccessNotification}>Success</button>
      <button onClick={showErrorNotification}>Error</button>
      <button onClick={showInfoNotification}>Info</button>
      <button onClick={showWarningNotification}>Warning</button>
      <ToastContainer/>
    </div>
  );
};

export default App;

