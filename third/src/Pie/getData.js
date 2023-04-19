import { csv } from 'd3';
const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';
export const getData = async () => {
    const data = await csv(csvUrl);
    return data;
}