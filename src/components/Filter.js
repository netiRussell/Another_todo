function Filter({ setFilterYear }) {
  return (
    <div className="filter">
      <label id="select">Filter by</label>
      <select
        id="select"
        onChange={function (event) {
          setFilterYear(event.target.value);
        }}
      >
        <option>None</option>
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2019</option>
      </select>
    </div>
  );
}

export default Filter;
