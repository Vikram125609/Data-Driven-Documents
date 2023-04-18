import React, { useEffect, useState } from 'react'
import { getData } from "./getData";
import { arc, pie } from 'd3'
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
    const pieArc = arc()
        .innerRadius('0')
        .outerRadius('300')

    const colorPie = pie().value(1);
    return (
        <>
            {
                !data && 'Loading...'
            }
            {
                data && data.map((d) => {
                    return <div style={{ backgroundColor: d['RGB hex value'], width: '1500px', height: '5px' }}></div>
                })
            }
            <svg width='600px' height='600px'>
                <g transform={`translate(300,300)`}>
                    {
                        data.map((d, i) => {
                            return (
                                <path fill={d['RGB hex value']} d={pieArc({
                                    startAngle: i / data.length * 2 * Math.PI,
                                    endAngle: (i + 1) / data.length * 2 * Math.PI
                                })}>
                                </path>
                            )
                        })
                    }
                </g>
            </svg>
            <svg width='600px' height='600px'>
                <g transform={`translate(300,300)`}>
                    {
                        colorPie(data).map((d) => {
                            return <path fill={d.data['RGB hex value']} d={pieArc(d)}></path>
                        })
                    }
                </g>
            </svg>
        </>
    );
};

export default First;