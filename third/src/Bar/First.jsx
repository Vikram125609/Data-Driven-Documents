import * as d3 from 'd3'
import React, { useEffect, useState } from 'react'
import { scaleBand, scaleLinear, csv, max } from 'd3';
import { getData } from "./getData";
import { useData } from './useData'
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
const csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';
const First = () => {
    const data = useData();
    const margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 285
    };
    const innerHeight = 5000 - margin.top - margin.bottom;
    const innerWidth = 1000 - margin.right - margin.left;
    const yScale = scaleBand()
        .domain(data.map(d => d?.Country))
        .range([0, innerHeight])
        .paddingInner(0.5)
    const xScale = scaleLinear()
        .domain([0, max(data, d => d.Population)])
        .range([0, innerWidth]);

    const xAxisTickFormat = (n) => {
        return d3.format('.2s')(n).replace('G', 'B');
    }
    return (
        <>
            <svg width='1000' height='5030'>
                <g transform={`translate(${margin.left},${margin.top})`}>
                    <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={xAxisTickFormat} />
                    <AxisLeft yScale={yScale} />
                    <text className='axis-label' x={innerWidth / 2} y={innerHeight + 35} textAnchor='middle'>Population</text>
                    <Marks tooltipFormat={xAxisTickFormat} data={data} yScale={yScale} xScale={xScale} />
                </g>
            </svg> 
        </>
    );
};
export default First;