import Logo from "./logo";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="backdrop-blur flex items-center p-2 sm:p-4 justify-between md:pl-10 md:pt-10 fixed top-0 w-full z-20">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
