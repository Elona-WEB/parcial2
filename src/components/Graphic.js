import * as d3 from "d3";
import { useEffect } from "react";
export default function Graphic(props) {
  const visualizeScatter = async () => {
    if (props.online) {
      //Pido la data que entra
      const data = props.data;
      //Canva
      var margin = {
        top: 50,
        right: 20,
        bottom: 50,
        left: 40,
      };
      let default_width = 700 - margin.left - margin.right;
      let default_height = 500 - margin.top - margin.bottom;
      let h = default_height;
      let w = default_width;
      let width = w;
      let height = h;
      var div = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
      //Defino x-y axis
      var x = d3.scaleLinear().range([0, width]).domain([0, 360]);
      var y = d3
        .scaleLinear()
        .range([height, 0])
        .domain([
          0,
          d3.max(data, function (d) {
            return d.seasons;
          }),
        ]);
      //Hago append delsvg
      var svg = d3
        .select("#scatter")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      // Añado los puntos basado en lo que piden
      var path = svg
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("r", 7)
        .attr("cx", function (d) {
          return x(d.episodes);
        })
        .attr("cy", function (d) {
          return y(d.seasons);
        })
        .attr("fill", "#F9512D");
      //Pongo label a cada punto
      svg
        .selectAll(".dodo")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "dodo")
        .attr("x", function (d) {
          return x(d.episodes);
        })
        .attr("y", function (d) {
          return y(d.seasons);
        })
        .attr("dx", ".71em")
        .attr("dy", ".35em")
        .style("font-family", "serif")
        .text(function (d) {
          return d.name;
        });
      //Labels a las axis
      svg
        .append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .style("font-family", "serif")
        .attr("x", width)
        .attr("y", height + 30)
        .text("Episodes");
      svg
        .append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .style("font-family", "serif")
        .attr("y", 6)
        .attr("dy", "-1.95em")
        .attr("transform", "rotate(-90)")
        .text("Seasons");
      // Añado las axis
      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
      svg.append("g").call(d3.axisLeft(y));
    }
  };

  useEffect(() => {
    if (props.data.length > 0) {
      visualizeScatter();
    }
  }, [props.data]);

  return <div id="scatter"></div>;
}
