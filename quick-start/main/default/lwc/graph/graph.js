/* global D3 */
import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import D3 from '@salesforce/resourceUrl/d3';

export default class Graph extends LightningElement {
  @api results;
  @api metadata;
  @api selection;
  @api setSelection;
  @api getState;
  @api setState;

  @api sourceField;
  @api destinationField;
  @api valueField;

  svgWidth = 400;
  svgHeight = 400;

  d3Initialized = false;

  renderedCallback() {
    if (this.d3Initialized) {
      return;
    }
    this.d3Initialized = true;

    Promise.all([loadScript(this, D3 + '/d3.v5.min.js'), loadStyle(this, D3 + '/style.css')])
      .then(() => {
        this.initializeD3();
      })
      .catch((error) => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Error loading D3',
            message: error.message,
            variant: 'error'
          })
        );
      });
  }

  initializeD3() {
    // Example adopted from https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7
    const svg = d3.select(this.template.querySelector('svg.d3'));
    const width = this.svgWidth;
    const height = this.svgHeight;
    const color = d3.scaleOrdinal(d3.schemeDark2);

    const nodeIds = new Set();
    const links = [];

    const hashEdge = (source, destination) => [source, destination].join('~~~');
    const hashLink = (link) => hashEdge(link.source, link.target);

    const rowsByHash = new Map();

    this.results.forEach((row) => {
      const source = row[this.sourceField];
      const destination = row[this.destinationField];
      const value = this.valueField != null ? row[this.valueField] : 1;

      nodeIds.add(source);
      nodeIds.add(destination);

      const link = { source, target: destination, value };

      links.push(link);
      rowsByHash.set(hashLink(link), row);
    });

    const selectedRowHashes = new Set(
      this.selection.map((row) => hashEdge(row[this.sourceField], row[this.destinationField]))
    );

    const nodes = Array.from(nodeIds, (id) => ({ id }));

    const simulation = d3
      .forceSimulation()
      .force(
        'link',
        d3.forceLink().id((d) => {
          return d.id;
        })
      )
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke-width', (link) => Math.sqrt(link.value))
      .attr('fill', (link) => (selectedRowHashes.has(hashLink(link)) ? 'green' : 'yellow'))
      .on('click', (link) => {
        console.debug(link);
        this.setSelection([rowsByHash.get(hashLink(link))]);
      });

    const node = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 5)
      .attr('fill', (vertex) => 'blue')
      .call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended))
      .on('click', (vertex) => {
        console.debug(vertex);
      });

    node.append('title').text((d) => {
      return d.id;
    });

    simulation.nodes(nodes).on('tick', ticked);

    simulation.force('link').links(links);

    function ticked() {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);
      node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
    }

    function dragstarted(d) {
      if (!d3.event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }
  }
}
