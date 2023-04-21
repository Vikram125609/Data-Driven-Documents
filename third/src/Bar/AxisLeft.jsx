export const AxisLeft = ({ yScale }) => {
    return yScale.domain().map(tickValue => {
        return (
            <g className="tick" key={tickValue} transform={`translate(0,${yScale(tickValue) + yScale.bandwidth() / 2})`}>
                {/* <line x1={xScale(tickValue)} x2={xScale(tickValue)} y1={0} y2={innerHeight} stroke='black' /> */}
                {/* <line x1={0} x2={0} y1={0} y2={innerHeight} stroke='black' /> */}
                <text x={-3} dy='0.32em' style={{ textAnchor: 'end' }}>{tickValue}</text>
            </g>
        )
    });
} 