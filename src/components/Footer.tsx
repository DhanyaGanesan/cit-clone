const Footer = () => {
  return (
    <div id="footer" className="bg-blue-900 text-white py-10 px-8 text-center">
      
      <h2 className="text-2xl font-bold mb-4">
        Chennai Institute of Technology
      </h2>

      <p className="text-gray-300 mb-4">
        Building future engineers with innovation and excellence.
      </p>

      <div className="flex justify-center gap-6 mb-4">
        <span className="cursor-pointer hover:text-gray-300">Home</span>
        <span className="cursor-pointer hover:text-gray-300">About</span>
        <span className="cursor-pointer hover:text-gray-300">Departments</span>
        <span className="cursor-pointer hover:text-gray-300">Placements</span>
      </div>

      <p className="text-gray-400 text-sm">
        © 2026 CIT. All rights reserved.
      </p>

    </div>
  );
};

export default Footer;