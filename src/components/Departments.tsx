import { FaLaptopCode, FaMicrochip, FaCogs, FaBuilding } from "react-icons/fa";

const departments = [
  {
    name: "Computer Science",
    desc: "Focus on software and AI",
    icon: <FaLaptopCode />,
  },
  {
    name: "Electronics",
    desc: "Circuits and communication systems",
    icon: <FaMicrochip />,
  },
  {
    name: "Mechanical",
    desc: "Machines and manufacturing",
    icon: <FaCogs />,
  },
  {
    name: "Civil",
    desc: "Infrastructure and construction",
    icon: <FaBuilding />,
  },
];

const Departments = () => {
  return (
    <div id="departments" className="py-16 px-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-10">
        Departments
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center"
          >
            {/* ICON */}
            <div className="text-4xl text-blue-600 mb-4">
              {dept.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {dept.name}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600">{dept.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;