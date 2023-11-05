import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const BarChart = () => {
  const [data, setData] = useState([40, 60, 45, 70, 45, 60, 80]); // Example values, adjust as needed

  useEffect(() => {
    // Create the svg1 container
    const svg1 = d3.select('#chart-container')
      .append('svg')
      .attr('width', 580)
      .attr('height', 180);

    const barWidth = 12; // Adjusted width based on your preference
    const padding = 5; // Adjusted padding for equal gaps

    // Create the x-axis scale
    const xScale = d3.scaleBand()
      .domain(data.map((_, i) => `Label ${i + 1}`))
      .range([0, 580])
      .padding(padding / (580 / (barWidth * data.length))); // Adjusted padding for equal gaps

    // Create the y-axis scale
    const yScale = d3.scaleLinear()
      .domain([0, 100]) // Adjust the domain based on your data
      .range([180, 0]);

    // Create x-axis without ticks and line
    svg1.append('g')
      .attr('transform', 'translate(0,180)')
      .call(d3.axisBottom(xScale).tickValues([]))
      .select('.domain')
      .remove();

    // Create y-axis without ticks and line
    svg1.append('g')
      .call(d3.axisLeft(yScale).tickValues([]))
      .select('.domain')
      .remove();

    // Create bars
    svg1.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (_, i) => xScale(`Label ${i + 1}`))
      .attr('y', d => yScale(d))
      .attr('width', barWidth)
      .attr('height', d => 160 - yScale(d))
      .attr('rx', 5)
      .attr('fill', '#4bd269');

    // Custom x-axis labels
    svg1.selectAll('.x-label')
      .data(data.map((_, i) => `Label ${i + 1}`))
      .enter()
      .append('text')
      .attr('class', 'x-label')
      .attr('x', (d) => xScale(d) + xScale.bandwidth() / 4)
      .attr('y', 180)
      .style('text-anchor', 'middle')
      .style('font-size', '12px') 
      .style('margin-top',"10px")
      .style('fill', 'darkgray') 
      .text(d => d);

    // Y-axis label
    svg1.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - 50)
      .attr('x', 0 - 100)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text('Y Axis Label');

    return () => {
      svg1.remove();
    };
  }, [data]);

  return (
    <div className="firstgraph">
      <div className="dropdownbox">
        <div style={{ fontWeight: "600" }}>Checking Account</div>
        <div>
          <Popup trigger={
            <button className="btn1">New Sales Invoice</button>
          } position="left center">
            <input className="files" type="file"></input>
            <button style={{ marginTop: "3px" }} className="btn1">Add</button>
          </Popup>
        </div>
      </div>
      <hr style={{ margin: "0px" }} />
      <div id="chart-container"></div>
    </div>
  );
};

export default BarChart;
