import ChartBar from "./ChartBar";

function Chart({ dataPoints }) {
  const maxValue = [...dataPoints].sort((a, b) => b.value - a.value)[0].value;

  return (
    <div className="chart">
      {dataPoints.map((value, index) => (
        <ChartBar maxValue={maxValue} value={value.value} year={value.year} key={index} />
      ))}
    </div>
  );
}

export default Chart;
