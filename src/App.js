import logo from './logo.svg';
import './App.css';
import { Bounce, Flip, ToastContainer, toast } from 'react-toastify';

function App() {
    const success = () => toast.success('Wow so easy!');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ToastContainer
        position="bottom-left"
        hideProgressBar={true}
        theme='light'
        transition={Flip}
        />
        <button onClick={success}> Click Me !</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
