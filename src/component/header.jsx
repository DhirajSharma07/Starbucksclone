import { Link, NavLink } from "react-router-dom";
import { LiaUserCircleSolid } from "react-icons/lia";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Header() {
  // State to control the toggle
  const [activetoggle, setactivetoggle] = useState(true); // Initially, the menu is hidden

  // Function to toggle the active state
  const Togglebtn = () => {
    setactivetoggle(!activetoggle); // Toggle the state between true/false
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white border-b-2 border-gray-300">
        <div className="mx-auto flex h-20 max-w-screen-xl w-full items-center gap-8 px-4 sm:px-6 lg:px-8 border-b border-yellow-100">
          <a className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <img src="https://www.starbucks.in/assets/icon/logo.png" alt="Logo" className="w-12 rounded-full" />
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block" id="active">
              <ul className="flex items-center gap-20 pl-3 text-md font-medium">
                <li>
                  <NavLink className="transition hover:text-green-300/75 " to="/">Home</NavLink>
                </li>
                <li><NavLink className="text-gray-500 transition hover:text-green-300/75" to="/Giftpage">Gift</NavLink></li>
                <li><NavLink className="text-gray-500 transition hover:text-green-300/75" to="/OrderList">Order</NavLink></li>
                <li><NavLink className="text-gray-500 transition hover:text-green-300/75" to="/Login">Pay</NavLink></li>
                <li><NavLink className="text-gray-500 transition hover:text-green-300/75" to="/store">Store</NavLink></li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 relative justify-center items-center">
                <CiSearch className="absolute hidden lg:block top-2 left-3 text-2xl" />
                <input
                  type="text"
                  placeholder="Looking for something specific?"
                  className="hidden lg:block rounded-3xl h-10 w-72 border-none bg-white shadow-lg pl-10 text-sm font-medium"
                />

                <Link
                  className="hidden lg:block rounded-3xl text-center"
                  to="/Login"
                > < LiaUserCircleSolid className=" text-4xl" /> </Link>
              </div>

              <button
                onClick={Togglebtn}
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:bg-green-900 md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 font-extrabold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
           
            </div>
          </div>
        </div>
      </header>
      <nav aria-label="Global" className={`md:hidden w-full fixed z-40 ${activetoggle ? "hidden" : "block"}`} id="active">
              <ul className="flex  flex-col items-center py-3 mt-20 gap-3 w-full bg-yellow-400   font-medium">
                <li>
                  <NavLink className="transition  text-gray-500 text-xl hover:text-green-300/75 " to="/">Home</NavLink>
                </li>
                <li><NavLink className="text-gray-500  text-xl transition hover:text-green-300/75" to="/Giftpage">Gift</NavLink></li>
                <li><NavLink className="text-gray-500  text-xl transition hover:text-green-300/75" to="/OrderList">Order</NavLink></li>
                <li><NavLink className="text-gray-500  text-xl transition hover:text-green-300/75" to="/Login">Pay</NavLink></li>
                <li><NavLink className="text-gray-500  text-xl transition hover:text-green-300/75" to="/store">Store</NavLink></li>
              </ul>
            </nav>
    </>
  );
}

export default Header;
