const Facecontainer = (props) => {
    return (
        <>
            <svg>
                <g transform={`translate(300,300),rotate(0)`}>
                    {props.children}
                </g>
            </svg> 
        </>
    )
};
export default Facecontainer;