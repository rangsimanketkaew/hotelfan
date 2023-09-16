import fs from 'fs';

const rawData = fs.readFileSync('de.json');
const data = JSON.parse(rawData.toString());

const geo = () => data.geo;

export { geo };
