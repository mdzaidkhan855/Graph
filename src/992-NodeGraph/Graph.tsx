// src/Graph.js
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './Graph.css'; // For custom styles
import { useState } from 'react';
import Panel from './Panel.tsx';


const Graph = ({ nodes, links, interlinks }) => {
  //  const [openInput, setOpenInput] = useState(false);
  const [leafLabel, setLeafLabel] = useState('');
  //const svgRef = useRef(null);

  // const width = window.innerWidth;
  // const height = window.innerHeight;

  const width = 1300;
  const height = 700;
  console.log('width:height:', width + ":" + height);

  useEffect(() => {
    const svg = d3.select('svg').attr('width', width).attr('height', height);
    svg.selectAll('*').remove();

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(200)
      )
      .force('charge', d3.forceManyBody().strength(-1000))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force(
        'collision',
        d3.forceCollide().radius((d) => {
          // Set a larger radius for each node to prevent overlap
          //return d.group === 1 ? 75 : d.group === 2 ? 65 : 45;
          return 100;
        })
      )
      .on('tick', ticked);
    const link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'link')
      .attr('opacity', (d) =>
        nodes.find((n) => n.id === d.target.id && n.group > 2) ? 0 : 1
      );

    const textMeasurement = svg
      .append('text')
      .style('visibility', 'hidden')
      .style('font', '12px sans-serif');

    function calculateRadiusForWord(text) {
      textMeasurement.text(text);
      const bbox = textMeasurement.node().getBBox();
      return Math.sqrt(bbox.width ** 2 + bbox.height ** 2) / 2 + 10; // Add some padding
    }

    function calculateRadius(lines, fullWord) {
      // Calculate the radius based on the largest word
      const maxWordRadius = d3.max(
        lines.map((word) => calculateRadiusForWord(word))
      );

      // Calculate the radius based on the number of lines
      const lineBasedRadius = (lines.length * 12) / 1.5 + 10; // Adjust based on line height

      // Return the greater of the two radii
      return Math.max(maxWordRadius, lineBasedRadius);
    }

    function splitWords(text) {
      return text.split(' '); // Split text into individual words
    }

    const node = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .call(
        d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      )
      .on('click', handleNodeClick);

    node
      .append('circle')
      .attr('r', (d) => {
        const words = splitWords(d.label);
        return calculateRadius(words, d.label);
      })
      .attr('fill', (d) =>
        d.group === 1 ? 'orange' : d.group === 2 ? 'lightblue' : 'lightgreen'
      )
      .attr('opacity', (d) => (d.group === 1 || d.group === 2 ? 1 : 0));

    node
      .append('text')
      .attr('dy', '0')
      .attr('text-anchor', 'middle') // Center text horizontally
      .attr('fill', (d) => {
        if (d.group === 1) return 'black'; // For orange background
        if (d.group === 2) return 'black'; // For light blue background
        return 'black'; // For light green background
      })
      .each(function (d) {
        const words = splitWords(d.label); // Split text into words
        const yOffset = (words.length - 1) * 2; // Adjust for vertical centering
        d3.select(this)
          .selectAll('tspan')
          .data(words)
          .enter()
          .append('tspan')
          .attr('x', 0)
          .attr('dy', (d, i) => {
            return i === 0 ? `${0}px` : `${12}px`;
          })
          .text((d) => d);
      })
      .attr('opacity', (d) => (d.group === 1 || d.group === 2 ? 1 : 0));

    function handleNodeClick(event, d) {
      event.stopPropagation();

      // Modification
      //alert('group Id Clicked is :' + d.group);
      if (d.group === 2 || d.group === 3) {
        //alert(' Leaf label; ' + d.label);
        handleLeafClick(d.label);
      } else {
        setLeafLabel('');
      }

      const childNodes = node.filter((n) => n.parent === d.id);
      const childLinks = link.filter(
        (l) => l.source.id === d.id && nodes.find((n) => n.id === l.target.id)
      );

      // Toggle visibility
      const isVisible = childNodes.select('circle').attr('opacity') === '1';

      childNodes.select('circle').attr('opacity', isVisible ? 0 : 1);
      childNodes.select('text').attr('opacity', isVisible ? 0 : 1);
      childLinks.attr('opacity', isVisible ? 0 : 1);
    }

    // Modification
    function handleLeafClick(label) {
      //alert('leaf clicked');
      setLeafLabel(label);
    }

    svg.on('click', () => {
      // Hide all areas and links when clicking outside nodes
      node
        .filter((d) => d.group > 2)
        .selectAll('circle, text')
        .attr('opacity', 0);
      link.attr('opacity', (d) => {
        const targetNode = nodes.find(
          (n) => n.id === d.target.id && n.group > 2
        );
        return targetNode ? 0 : 1;
      });
    });

    function ticked() {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node.attr('transform', (d) => {
        // Constrain node positions within SVG bounds
        const radius = d.group === 1 ? 60 : d.group === 2 ? 50 : 30;
        d.x = Math.max(radius, Math.min(width - radius, d.x));
        d.y = Math.max(radius, Math.min(height - radius, d.y));

        return `translate(${d.x},${d.y})`;
      });
      // Adjust text position based on circle radius
      node.select('text').attr('y', (d) => {
        // Compute the radius and set y position of text
        const radius = d.group === 1 ? 60 : d.group === 2 ? 50 : 30;
        const lineHeight = 12; // Assuming 12px line height
        const numLines = d.label.split('\n').length;
        //return -radius + lineHeight * numLines / 2;
        return '-1em';
      });
    }

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }, []);
 
  return (
    <div className="graph">
      <div className="svg">
        <svg></svg>
      </div>
      {leafLabel && (
        <div className="panel">
          <Panel leafLabel={leafLabel} />
        </div>
      )}
    </div>
  );
};

export default Graph; 
