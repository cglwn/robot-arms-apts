import numeric from 'numeric';
import math from 'mathjs';
import d3 from 'd3';

import { endLocations } from './robot-motion.js';

function zip(a1, a2) {
    var zipped = [];
    for (var i = 0; i < a1.length; i++) {
        zipped.push([a1[i], a2[i]]);
    }
    return zipped;
}

var svg = d3.select("body")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);

// svg
//     .selectAll(".magenta")
//     .data(endLocations)
//     .enter()
//     .append("circle")
//     .attr({
//         cx: 50,
//         cy: 250,
//         class: "magenta"
//     })
//     .transition()
//     .duration(1000)
//     .attr("cx", d => { return 50 + 10 * d[0]; })
//     .attr("cy", d => { return 250 + 10 * d[1]; })
//     .attr("r", 1)
//     .attr("fill", "magenta")
// ;

svg
    .selectAll(".start")
    .data([[0, 0, 0]])
    .enter()
    .append("circle")
    .attr("class", "start")
    .attr("cx", d => { return 50 + 10 * d[0]; })
    .attr("cy", d => { return 250 + 10 * d[1]; })
    .attr("r", 10)
    .attr("fill-opacity", "0")
    .attr("stroke", "blue")
 ;

svg
    .selectAll('line')
    .data(endLocations)
    .enter()
    .append('line')
    .attr({
        x1: 50,
        y1: 250,
        x2: 50,
        y2: 250,
        stroke: 'magenta',
        'stroke-width': 5
    })
    .transition()
    .duration(1500)
    .attr({
        x2: d => { return 50 + 10 * d[0]; },
        y2: d => { return 250 + 10 * d[1]; }
    })
    .transition()
    .duration(1500)
    .attr({
        x1: d => { return 50 + 10 * d[0]; },
        y1: d => { return 250 + 10 * d[1]; }
    })
    .transition()
    .selectAll(".magenta")
    .attr("fill", "magenta")
;


svg.selectAll(".end")
    .data([[10, 0, 0]])
    .enter()
    .append("circle")
    .attr("class", "end")
    .attr("cx", d => { return 50 + 10 * d[0]; })
    .attr("cy", d => { return 250 + 10 * d[1]; })
    .attr("r", 10)
    .attr("fill-opacity", "0")
    .attr("stroke", "blue")
;

svg.selectAll("rect")
    .data([[]])
    .enter()
    .append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .attr("width", 500)
    .attr("height", 500)
;

console.log(endLocations);
