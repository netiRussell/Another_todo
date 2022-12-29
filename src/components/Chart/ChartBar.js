function ChartBar({ maxValue, value, year }) {
  const height = (value / maxValue) * 100 + "%";

  return (
    <div className="w-chart_bar">
      <div className="chart_bar" style={{ height: height }}>
        {value}
      </div>
      <p>{year}</p>
    </div>
  );
}

export default ChartBar;
