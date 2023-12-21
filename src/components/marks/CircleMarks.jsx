export default function CircleMarks({
  data,
  xScale,
  yScale,
  colorScale,
  returnXValue,
  returnYValue,
  returnColorValue,
  tooltipModifier,
}) {
  return data.map((d, i) => {
    return (
      <circle
        key={i}
        cx={xScale(returnXValue(d))}
        cy={yScale(returnYValue(d))}
        r="5"
        // fill="none"
        // strokeWidth={2}
        fill={colorScale(returnColorValue(d))}
      >
        <title>{`${returnYValue(d)} ${tooltipModifier}`}</title>
      </circle>
    );
  });
}
