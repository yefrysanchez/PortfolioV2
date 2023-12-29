import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="h-16 border">
      <nav className="flex justify-between items-center px-8">
        <div className="h-16">
          <a href="#">
            <img className="h-full object-cover" src={logo} alt="logo" />
          </a>
        </div>
        <ul className="flex">
          <a href="#">
            <li className="mx-4">About</li>
          </a>
          <a href="#">
            <li className="mx-4">Projects</li>
          </a>
        </ul>
        <div>
          <a className="bg-slate-600 px-6 py-3 rounded-full" href="#">
            Mail
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
