// import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const notify = () => toast("Wow so easy!");
  const notifyError = () => toast.error("Error with choice!");
  const notifyWarning = () => toast.warn("Warning be careful!");
  const notifySuccess = () => toast.success("Everything is good!");
  const notifyInfo = () => toast.info("Here's some info");
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={notify}>Notify !</button>
      <button onClick={notifyError}>Error !</button>
      <button onClick={notifyWarning}>Warning !</button>
      <button onClick={notifySuccess}>Success !</button>
      <button onClick={notifyInfo}>Info !</button>
        <ToastContainer/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
