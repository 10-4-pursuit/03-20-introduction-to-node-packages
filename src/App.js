import { ToastContainer, toast } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";


function App() {

  const message = () => toast("Hey Boo!");
  const success = () => toast.success("Submission Successful");
  const warn = () => toast.warn("I told you NOT to press this!");
  const info = () => toast.info("This is where information shows up");
  const error = () => toast.error("Wrong, Try Again");

  return (
    <div class="entirelayout">
     
      <ToastContainer
      position="bottom-right"
      theme="dark"
      hideProgressBar= {true}
      transition={Zoom}
      />

      <button onClick={message}>Say Hi!</button>
      <button onClick={success}>Submit</button>
      <button onClick={warn}>Don't Press This</button>
      <button onClick={info}>Want Info?</button>
      <button onClick={error}>Mistake</button>
  
    </div>
  );
}

export default App;
