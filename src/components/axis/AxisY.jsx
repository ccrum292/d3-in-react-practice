export default function AxisY({ yScale, title, innerHeight, innerWidth }) {
  return (
    <>
      {yScale.ticks().map((tickValue) => (
        <g key={tickValue} transform={`translate(0, ${yScale(tickValue)})`}>
          <line x2={innerWidth} stroke="black" />
          <text x={-8} style={{ textAnchor: "end" }} dy={".32em"}>
            {tickValue}
          </text>
        </g>
      ))}
      <text
        textAnchor="middle"
        transform={`translate(${-45},${innerHeight / 2}) rotate(-90)`}
      >
        {title}
      </text>
    </>
  );
}
