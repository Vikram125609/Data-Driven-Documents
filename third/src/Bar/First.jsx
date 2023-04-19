import React, { useEffect, useState } from 'react'
import { scaleBand, scaleLinear, csv, max } from 'd3';
import { getData } from "./getData";
const csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';
const First = () => {
    const [data, setData] = useState([]);
    const [isMounting, setIsMounting] = useState(true);
    const getResult = async () => {
        const response = await getData();
        setData(response);
    }
    useEffect(() => {
        getResult();
    }, [])
    useEffect(() => {
        if (isMounting) {
            setIsMounting(false);
            return;
        }
        console.log(data);
    }, [data]);
    const yScale = scaleBand()
        .domain(data.map(d => d?.Country))
        .range([0, 1000]);
    const xScale = scaleLinear()
        .domain([0, max(data, d => d.Population)])
        .range([0, 1000])
    return (
        <>
            <svg width='1000' height='1000'>
                {
                    data.map((d) => {
                        return (
                            <rect x={0} y={yScale(d.Country)} width={xScale(d.Population)} height={yScale.bandwidth()}></rect>
                        );
                    })
                }
            </svg>
        </>
    );
};
export default First;