import logo from './logo.svg';
import './App.css';
import { Bounce, Flip, ToastContainer, toast} from 'react-toastify';

function App() {
  const success = () => toast.success('Wow so easy!');

  return (
    <div >
  <ToastContainer
    position="bottom-left"
    hideProgressBar={true}
    theme="light"
    transition = {Flip}
    />
    <button onClick={success}>  
      Click me
    </button>
   
    </div>
    
  );
}

export default App;
