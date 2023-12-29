import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="h-16 text-white">
      <nav className="flex justify-between items-center px-8">
        <div className="h-16 flex items-center">
          <a href="#">
            <img className="h-12" src={logo} alt="logo" />
        
          </a>
        </div>
        <ul className="flex px-4 py-3 rounded-full">
          <a href="#">
            <li className="mx-4">About</li>
          </a>
          <a href="#">
            <li className="mx-4">Projects</li>
          </a>
        </ul>
        <div>
          <a className="bg-[#29292B]/70 px-6 py-3 rounded-full" href="#">
            Mail
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
