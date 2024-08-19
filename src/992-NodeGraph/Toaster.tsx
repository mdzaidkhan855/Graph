import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toaster({message}){

    const notify = () => {
        toast.success(message, {
          position: 'bottom-right',
          autoClose: 5000, // Duration in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };

      useEffect(()=>{
        notify();
      },[])

      return (
        <div>
          {/* <h1>React Toastify Example</h1>
          <button onClick={notify}>Show Success Toast</button> */}
          <ToastContainer />
        </div>
      );
    
}

export default Toaster