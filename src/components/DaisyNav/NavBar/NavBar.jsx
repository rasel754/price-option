import { useState } from "react";
import Link from "../../Link/Link";
import { IoMdClose } from "react-icons/io";

import { TiThMenuOutline } from "react-icons/ti";
// const = useState(false);
const NavBar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];
  const  [open, setOpen] =useState(false);
  return (
    <nav className="bg-yellow-200 p-7 text-black">
      <div  className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
        {
            open === true ? <IoMdClose></IoMdClose> : <TiThMenuOutline></TiThMenuOutline>
        }
         {/* <TiThMenuOutline  className="text-3xl md:hidden"></TiThMenuOutline> */}
      </div>
      <ul className={`duration-1000
      ${open ? 'top-16' : '-top-60'}
       md:flex absolute md:static bg-yellow-200 px-3 shadow-2xl
      `

      }
      
     >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
