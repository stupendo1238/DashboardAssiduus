import React, { useEffect } from 'react';
import * as d3 from 'd3';

const StackedBarChart = () => {
  const data = [
    { category: 'August', series2: 20, series3: 30 },
    { category: 'September', series2: 25, series3: 35 },
    { category: 'October', series2: 20, series3: 30 },
    { category: 'November', series2: 25, series3: 35 },
    { category: 'December', series2: 20, series3: 30 },
    { category: 'January', series2: 25, series3: 35 },
    // Add more data as needed
  ];

  useEffect(() => {
    const svg2 = d3.select('#stacked-bar-chart');
    svg2.selectAll('*').remove(); // Clear existing content on update

    const width = 580;
    const height = 180;
    const barWidth = 12;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };

    // Data preparation
    const stack = d3.stack().keys(Object.keys(data[0]).slice(1));
    const stackedData = stack(data);

    // Scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.category))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(stackedData, d => d3.max(d, d => d[1]))])
      .range([height - margin.bottom, margin.top]);

    // Colors
    const colorScale = d3.scaleOrdinal()
      .domain(stackedData.map(d => d.key))
      .range(['#4bd269', '#29ab87']); // Specify colors for each series

    // Draw bars with curved corners
    svg2.selectAll("g")
      .data(stackedData)
      .enter().append("g")
        .attr("fill", d => colorScale(d.key))
      .selectAll("rect")
      .data(d => d)
      .enter().append("rect")
        .attr("x", d => xScale(d.data.category) + (xScale.bandwidth() - barWidth) / 2)
        .attr("y", d => yScale(d[1]))
        .attr("height", d => yScale(d[0]) - yScale(d[1]))
        .attr("width", barWidth)
        .attr("rx", d => d[0] ? 4 : 4); // x-axis corner radius for the bottom stack only

    // Remove y-axis
    svg2.selectAll('.y-axis').remove();

    // Customize x-axis
    const xAxis = d3.axisBottom(xScale)
      .tickSize(0) // Remove ticks
      .tickPadding(8) // Padding between labels and axis
      .tickFormat((d) => d)
      .tickValues(xScale.domain());// Remove tick values

    svg2.append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .attr("class", "x-axis")
      .call(xAxis)
      .selectAll("text")
      .style("fill", "darkgray");
    
    svg2.select(".x-axis")
    .select("path")
    .style("display", "none");
    
  }, []);

  return (
    <div className="firstgraph">
      <div className="dropdownbox">
        <div style={{fontWeight:"600"}}>Total Cash Flow</div>
        <div style={{display:"flex",gap:"15px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"4px"}}>
            <div style={{width:"12px",height:"12px",backgroundColor:"#29ab87",borderRadius:"3px"}}></div>
            <div style={{fontSize:"12px"}}>In</div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"4px"}}>
            <div style={{width:"12px",height:"12px",backgroundColor:"#4bd269",borderRadius:"3px"}}></div>
            <div style={{fontSize:"11px"}}>Out</div>
          </div>
        </div>
      </div>
      <hr style={{ margin: "0px" }} />
      <svg id="stacked-bar-chart" width="580" height="180"></svg>
    </div>
  );
};

export default StackedBarChart;
