function Filter({ setFilterYear, dataPoints }) {
  return (
    <div className="filter">
      <label id="select">Filter by</label>

      <select
        id="select"
        onChange={function (event) {
          setFilterYear(event.target.value);
        }}
      >
        <option key="default">None</option>

        {dataPoints.map((value, index) => (
          <option key={index}>{value.year}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
