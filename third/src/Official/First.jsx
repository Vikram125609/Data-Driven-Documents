import * as d3 from 'd3'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const First = () => {
    const [state, setState] = useState([])
    const getData = async () => {
        const res = await axios.get('https://data.cityofchicago.org/resource/ijzp-q8t2.json?$query=SELECT%0A%20%20%60id%60%2C%0A%20%20%60case_number%60%2C%0A%20%20%60date%60%2C%0A%20%20%60block%60%2C%0A%20%20%60iucr%60%2C%0A%20%20%60primary_type%60%2C%0A%20%20%60description%60%2C%0A%20%20%60location_description%60%2C%0A%20%20%60arrest%60%2C%0A%20%20%60domestic%60%2C%0A%20%20%60beat%60%2C%0A%20%20%60district%60%2C%0A%20%20%60ward%60%2C%0A%20%20%60community_area%60%2C%0A%20%20%60fbi_code%60%2C%0A%20%20%60x_coordinate%60%2C%0A%20%20%60y_coordinate%60%2C%0A%20%20%60year%60%2C%0A%20%20%60updated_on%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60location%60%2C%0A%20%20%60%3A%40computed_region_awaf_s7ux%60%2C%0A%20%20%60%3A%40computed_region_6mkv_f3dw%60%2C%0A%20%20%60%3A%40computed_region_vrxf_vc4k%60%2C%0A%20%20%60%3A%40computed_region_bdys_3d7i%60%2C%0A%20%20%60%3A%40computed_region_43wa_7qmu%60%2C%0A%20%20%60%3A%40computed_region_rpca_8um6%60%2C%0A%20%20%60%3A%40computed_region_d9mm_jgwp%60%2C%0A%20%20%60%3A%40computed_region_d3ds_rm58%60%0AORDER%20BY%20%60date%60%20DESC%20NULL%20LAST');
        console.log(res?.data)
        setState(res?.data)
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <table >
                <tr>
                    <td>
                        id
                    </td>
                    <td>
                        arrest
                    </td>
                    <td>
                        arrest
                    </td>
                    <td>
                        case_number
                    </td>
                    <td>
                        community_area
                    </td>
                    <td>
                        date
                    </td>
                    <td>
                        description
                    </td>
                    <td>
                        district
                    </td>
                    <td>
                        domestic
                    </td>
                </tr>
                {
                    state.map((data) => {
                        return (
                            <tr key={data?.id}>
                                <td>
                                    {data?.id}
                                </td>
                                <td>
                                    {data?.arrest}
                                </td>
                                <td>
                                    {data?.case_number}
                                </td>
                                <td>
                                    {data?.date}
                                </td>
                                <td>
                                    {data?.community_area}
                                </td>
                                <td>
                                    {data?.description}
                                </td>
                                <td>
                                    {data?.district}
                                </td>
                                <td>
                                    {data?.domestic}
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    );
};
export default First;