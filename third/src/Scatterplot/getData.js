import { csv } from 'd3';
const csvUrl = 'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv';
export const getData = async () => {
    const row = (d) => {
        // this is used for customizing each row 
        return d;
    }
    const data = await csv(csvUrl, row);
    return data;
}