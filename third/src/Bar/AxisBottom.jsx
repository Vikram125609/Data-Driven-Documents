export const AxisBottom = ({ xScale, innerHeight, tickFormat }) => {
    return xScale.ticks().map(tickValue => {
        return (
            <g className='tick' key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
                {/* <line x1={xScale(tickValue)} x2={xScale(tickValue)} y1={0} y2={innerHeight} stroke='black' /> */}
                <line x1={0} x2={0} y1={0} y2={innerHeight} />
                <text dy='0.71em' style={{ textAnchor: 'middle' }} y={innerHeight + 3}>{tickFormat(tickValue)}</text>
            </g>
        )
    })
};