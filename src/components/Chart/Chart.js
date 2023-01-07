import ChartBar from "./ChartBar";

function Chart({ dataPoints }) {
  let maxValue = 0;

  if (dataPoints.length > 0) {
    maxValue = [...dataPoints].sort((a, b) => b.value - a.value)[0].value;
  }

  return (
    <div className="chart">
      {dataPoints.map((value, index) => (
        <ChartBar maxValue={maxValue} value={value.value} year={value.year} key={index} />
      ))}
    </div>
  );
}

export default Chart;
