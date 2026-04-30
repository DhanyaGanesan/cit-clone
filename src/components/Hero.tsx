const Hero = () => {
  return (
    <div
       id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
      }}
    >
      <div className="bg-black/50 p-10 rounded-xl">
        <h1 className="text-5xl font-bold text-white mb-4">
          Chennai Institute of Technology
        </h1>

        <p className="text-lg text-gray-200 max-w-xl mb-6">
          Empowering students with knowledge, innovation, and excellence in engineering education.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Hero;