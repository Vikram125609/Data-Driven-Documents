import * as d3 from 'd3'
import React, { useEffect, useState } from 'react'
import { scaleBand, scaleLinear, csv, max } from 'd3';
import { getData } from "./getData";
import { useData } from './useData'
const First = () => {
    const data = useData();
    console.log(data);
    return (
        <>
            <h1>Scatter Plot</h1>
        </>
    );
};
export default First;