const Eyes = (props) => {
    const { cx } = props;
    return (
        <>
            <circle
                fill="balck"
                cy="-175"
                cx={cx}
                r="45"
                stroke="black"
                strokeWidth="5px"
            ></circle>
        </>
    );
}
export default Eyes;