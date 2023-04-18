import { arc } from 'd3'
const Lips = () => {
    const mouthArc = arc()
        .innerRadius(200)
        .outerRadius(220)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3 / 2);
    return (
        <>
            <path d={mouthArc()} />
        </>
    );
};
export default Lips;