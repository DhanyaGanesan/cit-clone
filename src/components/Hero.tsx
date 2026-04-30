import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
      }}
    >
      <div className="bg-black/60 p-10 rounded-xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white mb-4"
        >
          Chennai Institute of Technology
        </motion.h1>

        <p className="text-lg text-gray-200 mb-6">
          Empowering students with innovation and excellence
        </p>

        <button className="bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Hero;