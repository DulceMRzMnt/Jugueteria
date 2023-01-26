import { Outlet, Link } from "react-router-dom";
export default function Root () {
  return (
      <>
            
          <div id="sidebar">
           
        <div className="avatar">
            <div className="w-24 rounded margin-av">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        <div>
      
          <form method="post">
            <Link to={`edit/2`} className=" my-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Crear nuevo</Link>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Lista</Link>
            </li>
            <li>
              <Link to={`juguete/2`}>list 1</Link>
            
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"> <Outlet /></div>
    </>
  );
}