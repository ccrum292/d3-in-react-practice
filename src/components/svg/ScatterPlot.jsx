import { extent, scaleLinear, scaleOrdinal } from "d3";

import AxisX from "../../components/axis/AxisX";
import AxisY from "../../components/axis/AxisY";
import CircleMarks from "../marks/CircleMarks";

const marginObj = {
  left: 60,
  right: 20,
  top: 20,
  bottom: 50,
};

const returnXValue = (d) => d.year;
const returnYValue = (d) => d.mpg;
const returnColorValue = (d) => d.origin;

const xAxisTitle = "Year";
const yAxisTitle = "MPG";

const width = 800;
const innerWidth = width - marginObj.left - marginObj.right;

const height = 600;
const innerHeight = height - marginObj.top - marginObj.bottom;

export default function ScatterPlot({ data }) {
  const xScale = scaleLinear(extent(data, returnXValue), [
    0,
    innerWidth,
  ]).nice();

  const yScale = scaleLinear(extent(data, returnYValue), [
    innerHeight,
    0,
  ]).nice();

  const colorScale = scaleOrdinal(data.map(returnColorValue), [
    "red",
    "blue",
    "green",
  ]);

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${marginObj.left}, ${marginObj.top})`}>
        <AxisX
          xScale={xScale}
          title={xAxisTitle}
          innerHeight={innerHeight}
          innerWidth={innerWidth}
        />
        <AxisY
          yScale={yScale}
          title={yAxisTitle}
          innerHeight={innerHeight}
          innerWidth={innerWidth}
        />
        <CircleMarks
          data={data}
          xScale={xScale}
          yScale={yScale}
          colorScale={colorScale}
          returnXValue={returnXValue}
          returnYValue={returnYValue}
          returnColorValue={returnColorValue}
          tooltipModifier={yAxisTitle}
        />
      </g>
    </svg>
  );
}
