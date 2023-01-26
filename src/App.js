
import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Contact from "./routes/contact";
import Edit from './routes/edit';
import Juguete from './routes/juguete';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import New from './routes/elements';

function App () {
  const router = createBrowserRouter([
   {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
       {
        path: "edit/:editId",
         element: <Edit />,
      },
        {
        path: "juguete/:jugueteId",
         element: <Juguete />,
      },
      ],
    
   
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
  return (
    <div className="App">
  {/*     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
