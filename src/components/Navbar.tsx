const Navbar = () => {
  // function to scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      
      {/* Logo */}
      <h1
        className="text-2xl font-bold text-blue-700 cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        CIT
      </h1>

      {/* Menu */}
      <ul className="flex gap-8 text-gray-700 font-medium">
        <li
          onClick={() => scrollToSection("home")}
          className="cursor-pointer hover:text-blue-600"
        >
          Home
        </li>

        <li
          onClick={() => scrollToSection("about")}
          className="cursor-pointer hover:text-blue-600"
        >
          About
        </li>

        <li
          onClick={() => scrollToSection("departments")}
          className="cursor-pointer hover:text-blue-600"
        >
          Departments
        </li>

        <li
          onClick={() => scrollToSection("placements")}
          className="cursor-pointer hover:text-blue-600"
        >
          Placements
        </li>

        <li
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer hover:text-blue-600"
        >
          Contact
        </li>

        
      </ul>
    </div>
  );
};

export default Navbar;