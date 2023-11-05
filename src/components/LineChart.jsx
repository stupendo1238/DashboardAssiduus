import { useEffect, useState } from "react";
import * as d3 from "d3";

const LineChart = () => {
  const [data, setData] = useState([40, 50, 80, 45, 60, 50, 70, 30, 80, 40]);

  async function handleChange1(e) {
    console.log(e.target.value);
    if (e.target.value === "Random") {
      let new_data = data.map((_, i) => {
        return Math.floor(Math.random() * 60) + 30;
      });
      setData([...new_data]);
    }
    else if(e.target.value==="Manage"){
      setData([40, 50, 80, 45, 60, 50, 70, 30, 80, 40]);
    }
  }

  function handleChange2(e) {
    if (e.target.value === "February") {
      setData([40, 60, 80, 35, 60, 80, 70, 40, 80, 50]);
    } else if (e.target.value === "March") {
      setData([40, 50, 80, 45, 60, 80, 60, 40, 80, 60]);
    } else if (e.target.value === "January") {
      setData([40, 50, 80, 45, 60, 50, 70, 30, 80, 40]);
    }
  }

  useEffect(() => {
    const w = 580;
    const h = 180;
    const svg = d3
      .select(".linechart")
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("background", "#fff")
      .style("color", "darkgray");

    // Remove existing elements before rendering the new line
    svg.selectAll("*").remove();

    const xScale = d3.scaleLinear().domain([0, 9]).range([0, w]);
    const yScale = d3.scaleLinear().domain([0, 100]).range([h, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    const xAxis = d3.axisBottom(xScale).ticks(1 + 10).tickFormat((i) => i + 1);
    svg.append("g").call(xAxis).attr("transform", `translate(0,${h - 13})`).selectAll(".tick line").remove();

    const xAxisGroup = svg.append("g").call(xAxis).attr("transform", `translate(0,${h - 13})`);

    xAxisGroup.selectAll(".tick line").style("stroke", "none");

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "#29ab87")
      .attr("stroke-width", 2);
  }, [data]);

  return (
    <div className="firstgraph">
      <div className="dropdownbox">
        <div style={{ fontWeight: "600" }}>Checking Account</div>
        <div>
          <select className="firstdown" onChange={handleChange1}>
            <option value="Manage">Manage</option>
            <option value="Random">Random</option>
          </select>
          <select className="seconddown" onChange={handleChange2}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
          </select>
        </div>
      </div>
      <hr style={{ margin: "0px" }} />
      <svg className="linechart" style={{ color: "green" }}></svg>
    </div>
  );
};

export default LineChart;
