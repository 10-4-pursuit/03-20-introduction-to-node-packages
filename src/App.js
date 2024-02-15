import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
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
      
      <button onClick={() => toast('Wow so easy!')}>Notify!</button>

      <button onClick={() => toast.error('Try again')}>Notify!</button>

      <button onClick={() => toast.warn('Warning!')}>Notify!</button>

      <button onClick={() => toast.info('Info!')}>Notify!</button>

    </div>
  );
}

export default App;
