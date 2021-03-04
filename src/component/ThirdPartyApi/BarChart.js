import { Bar } from "react-chartjs-2";
import "../../styles/styles.css";

const BarChart = ({ value }) => {
  console.log("value".value);
  let codingLanguages = [];
  let coderCount = [];
  let barColor = [];

  let randomColorValue = () => {
    return (Math.random() * 256) | 0;
  };

  value?.forEach((element) => {
    codingLanguages.push(element.name);
    coderCount.push(element.count);
    barColor.push(
      `rgba(${randomColorValue()},${randomColorValue()},${randomColorValue()}, 0.8)`
    );
  });
  console.log("codingLanguages", codingLanguages);
  console.log("coderCount", coderCount);
  console.log("barColor", barColor);

  return (
    <>
      <div className="chart">
        <Bar
          data={{
            labels: [...codingLanguages],
            datasets: [
              {
                label: "Coding Languages",
                data: [...coderCount],
                backgroundColor: [...barColor],
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "Coding Language Stats",
              fontSize: 25,
            },
            legend: { display: false, position: "right" },
          }}
        />
      </div>
    </>
  );
};

export default BarChart;
