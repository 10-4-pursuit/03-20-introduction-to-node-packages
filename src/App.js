import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const notif = () => {
    toast("I want to Toastify!", {className: "mytoast"});
  };

  const info = () => {
    toast.info("I am a toast. Drag me!", {
      position: "top-right",
      draggable: true
    });
  };
  const success = () => { 
    toast.success("Yay, my toast worked!", {
      position: "top-center"
    });
  };
  const warn = () => {
    toast.warn("Keep it up and you'll get toasted!", {
      position: "bottom-center"
    });
  };
  const error = () => { 
    toast.error("Wrong toast!", {
      position: "bottom-left"
    });
  };

  return (
    <div>
      <button onClick={notif}style={{padding: '10px'}}>Click me</button><br/>
      <button onClick={info} style={{padding: '10px 25px', background: '#3498db', color: 'black'}}>Info</button><br/>
      <button onClick={success} style={{padding: '10px 11px', background: '#07bc0c', color: 'white'}}>Success</button><br/>
      <button onClick={warn} style={{padding: '10px 20.5px', background: '#f1c40f', color: 'black'}}>Warn</button><br/>
      <button onClick={error} style={{padding: '10px 22px', background: '#e74c3c', color: 'white'}}>Error</button>
      <ToastContainer />    
    </div>
  );
}

export default App;
