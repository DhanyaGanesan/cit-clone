const stats = [
  { label: "Students Placed", value: "1200+" },
  { label: "Highest Package", value: "60 LPA"},
  { label: "Companies Visited", value: "150+" },
  { label: "Placement Rate", value: "95%" },
];

const Placements = () => {
  return (
    <div id="placements" className="py-16 px-8 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-10">
        Placements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <h3 className="text-3xl font-bold text-blue-700 mb-2">
              {item.value}
            </h3>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placements;