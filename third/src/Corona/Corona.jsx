import React, { useEffect, useState } from 'react'
import { csvParse, csv, csvFormat } from 'd3'
import axios from 'axios'
const Corona = () => {
    const [data, setData] = useState()
    const [isMounting, setIsMounting] = useState(true);
    useEffect(() => {
        const data = axios.get('https://gist.githubusercontent.com/Vikram125609/99689fc97c4270a705f86943b33b12ae/raw/Data.csv');
        data.then((data) => {
            setData(data?.data);
        }).catch((error) => {
            console.log(error);
        })
        // const data = csv('https://gist.githubusercontent.com/Vikram125609/99689fc97c4270a705f86943b33b12ae/raw/Data.csv');
        // data.then((data) => {
        //     setData(data);
        //     console.log(data);
        //     console.log('Total Size', Math.round(csvFormat(data).length / 1024) + ' KB')
        //     console.log('Total Rows', data.length)
        //     console.log('Total Columns', data.columns.length)
        // }).catch((error) => {
        //     console.log(error)
        // })
    }, []);
    useEffect(() => {
        if (isMounting) {
            setIsMounting(false);
            return;
        }
        console.log('Total Size', Math.round(data.length / 1024) + ' KB')
        const csv = csvParse(data);
        console.log(csv);
        console.log('Total Rows', csv.length)
        console.log('Total Columns', csv.columns.length)
    }, [data]);
    return (
        <>
            <h1>This is corona</h1>

        </>
    );
};
export default Corona;