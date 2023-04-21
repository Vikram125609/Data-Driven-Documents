import { getData } from './getData';
import React, { useEffect, useState } from 'react'
export const useData = () => {
    const [data, setData] = useState([]);
    const getResult = async () => {
        const response = await getData();
        setData(response);
    }
    useEffect(() => {
        getResult();
    }, [])
    return data;
}