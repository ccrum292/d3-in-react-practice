export default function AxisX({ xScale, title, innerHeight, innerWidth }) {
  return (
    <>
      {xScale.ticks().map((tickValue) => (
        <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${0})`}>
          <line x1="0" y1="0" x2="0" y2={innerHeight} stroke="black" />
          <text
            y={innerHeight + 20}
            style={{ textAnchor: "middle" }}
            // dy={".71em"}
          >
            {tickValue}
          </text>
        </g>
      ))}
      <text
        style={{ textAnchor: "middle" }}
        // dy={".71em"}
        transform={`translate(${innerWidth / 2}, ${innerHeight + 40})`}
      >
        {title}
      </text>
    </>
  );
}
