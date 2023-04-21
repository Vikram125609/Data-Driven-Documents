export const Marks = ({ data, yScale, xScale, tooltipFormat }) => {
    return data.map((d) => {
        return (
            <>
                <rect className="mark " key={d?.Country} x={0} y={yScale(d.Country)} width={xScale(d.Population)} height={yScale.bandwidth()}>
                    <title>
                        {
                            tooltipFormat(d?.Population)
                        }
                    </title>
                </rect>
            </>
        );
    })
}