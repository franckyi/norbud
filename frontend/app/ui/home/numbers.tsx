const projects = {
  count: "10+",
  label: "Realizacje",
  classes:
    "w-36 h-36 p-12 flex flex-col justify-between items-center bg-green-700",
};
const regions = {
  count: "22",
  label: "Powiatów",
  classes:
    "w-36 h-36 p-12 flex flex-col justify-between items-center bg-green-700",
};

function Numbers() {
  return (
    <div className="flex gap-4">
      <p className={projects.classes}>
        <div className="text-6xl">{projects.count}</div>
        <span className="text-base font-light">{projects.label}</span>
      </p>
      <p className={regions.classes}>
        <div className="text-6xl">{regions.count}</div>
        <span className="text-base font-light">{regions.label}</span>
      </p>
    </div>
  );
}

export default Numbers;
