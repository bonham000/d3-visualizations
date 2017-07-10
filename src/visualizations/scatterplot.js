
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';

const data = [
  { price: 11, time: 1, volume: 250 },
  { price: 23, time: 2, volume: 200 },
  { price: 17, time: 3, volume: 300 },
  { price: 40, time: 4, volume: 500 },
  { price: 32, time: 5, volume: 415 },
];

const width = 500;
const height = 450;

const rMin = 1;
const rMax = 35;

export default () => {

  const svg = select('body').append('svg')
    .attr('width', width)
    .attr('height', height);

  const xValue = 'time';
  const yValue = 'price';
  const rValue = 'volume';

  const xScale = scaleLinear().range([0, width]);
  const yScale = scaleLinear().range([height, 0]);
  const rScale = scaleLinear().range([rMin, rMax]);

  const circles = svg.selectAll('circle').data(data);

  xScale.domain(extent(data, d => d[xValue]));
  yScale.domain(extent(data, d => d[yValue]));
  rScale.domain(extent(data, d => d[rValue]));

  circles.enter()
    .append('circle')
    .attr('cx', d => xScale(d[xValue]))
    .attr('cy', d => yScale(d[yValue]))
    .attr('r', d => rScale(d[rValue]));

}
