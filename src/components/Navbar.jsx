import Select from "react-select";
const Navbar = ({ unCopleted, onChange, selectedOption }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "unCompleted", label: "unCompleted" },
  ];
  return (
    <header>
      {unCopleted ? (
        <>
          <span>{unCopleted}</span>
          <h2>are not completed</h2>
        </>
      ) : (
        <>
          <h2>set yuor today todos !</h2>
        </>
      )}
      <Select
        className="select"
        value={selectedOption}
        onChange={onChange}
        options={options}
      />
    </header>
  );
};

export default Navbar;