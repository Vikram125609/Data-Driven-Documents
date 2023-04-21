import * as d3 from 'd3'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const First = () => {
    const [state, setState] = useState([])
    const getData = async () => {
        const res = await axios.get('https://gist.githubusercontent.com/Vikram125609/086414185354fbf0f24fe94104ed479c/raw/gistfile1.txt');
        setState(res?.data)
        console.log(res?.data)
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>

        </>
    );
};
export default First;