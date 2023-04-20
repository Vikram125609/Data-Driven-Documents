import * as d3 from 'd3'
import React, { useEffect, useState } from 'react'
import { scaleBand, scaleLinear, csv, max } from 'd3';
import { getData } from "./getData";
const csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';
const First = () => {
    const [data, setData] = useState([]);
    const [isMounting, setIsMounting] = useState(true);
    const getResult = async () => {
        const response = await getData();
        setData(response.slice(0, 10));
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
    const margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 200
    };
    const innerHeight = 1000 - margin.top - margin.bottom;
    const innerWidth = 1000 - margin.right - margin.left;
    const yScale = scaleBand()
        .domain(data.map(d => d?.Country))
        .range([0, innerHeight]);
    const xScale = scaleLinear()
        .domain([0, max(data, d => d.Population)])
        .range([0, innerWidth]);

    return (
        <>
            <svg width='1000' height='1000'>
                <g transform={`translate(${margin.left},${margin.top})`}>
                    {
                        xScale.ticks().map(tickValue => {
                            return (
                                <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
                                    {/* <line x1={xScale(tickValue)} x2={xScale(tickValue)} y1={0} y2={innerHeight} stroke='black' /> */}
                                    <line x1={0} x2={0} y1={0} y2={innerHeight} stroke='black' />
                                    <text dy='0.71em' style={{ textAnchor: 'middle' }} y={innerHeight + 3}>{tickValue}</text>
                                </g>
                            )
                        })
                    }
                    {
                        yScale.domain().map(tickValue => {
                            return (
                                <g key={tickValue} transform={`translate(0,${yScale(tickValue) + yScale.bandwidth() / 2})`}>
                                    {/* <line x1={xScale(tickValue)} x2={xScale(tickValue)} y1={0} y2={innerHeight} stroke='black' /> */}
                                    {/* <line x1={0} x2={0} y1={0} y2={innerHeight} stroke='black' /> */}
                                    <text x={-3} dy='0.32em' style={{ textAnchor: 'end' }}>{tickValue}</text>
                                </g>
                            )
                        })
                    }
                    {
                        data.map((d) => {
                            return (
                                <>
                                    <rect key={d?.Country} x={0} y={yScale(d.Country)} width={xScale(d.Population)} height={yScale.bandwidth()}></rect>
                                </>
                            );
                        })
                    }
                </g>
            </svg>
        </>
    );
};
export default First;