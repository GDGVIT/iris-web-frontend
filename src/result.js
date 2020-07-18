import React from 'react';
import Graph from 'react-graph-network';
// import '../node_modules/react-vis/dist/style.css';
// import {XYPlot, LineSeries} from 'react-vis';
// import PropTypes from 'prop-types';
// import {forceSimulation, forceLink, forceManyBody, forceCenter} from 'd3-force';

// import {XYPlot, MarkSeriesCanvas, LineSeriesCanvas} from 'react-vis';

// import rd3 from 'react-d3-library';

// import * as d3 from 'd3';
// import node from './d3file';


// const RD3Component = rd3.Component;

// var node = document.createElement('div');


// var diameter = 960,
//     format = d3.format(",d"),
//     color = d3.scale.category20c();

// var bubble = d3.layout.pack()
//     .sort(null)
//     .size([diameter, diameter])
//     .padding(1.5);

// var svg = d3.select(node).append("svg")
//     .attr("width", diameter)
//     .attr("height", diameter)
//     .attr("class", "bubble");

// d3.json("flare.json", function(error, root) {
//   if (error) throw error;

// var bubbles = svg.selectAll(".node")
//     .data(bubble.nodes(classes(flare))
//     .filter(function(d) { return !d.children; }))
//     .enter().append("g")
//     .attr("class", "node")
//     .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
// })



// class Result extends React.Component{
//     constructor(props) {-*
//         super(props);
//         this.state = {d3: ''}
//       }
    
//       componentDidMount() {
//         this.setState({d3: node});
//       }
    
//       render() {
//         return (
//           <div>
//             <RD3Component data={this.state.d3} />
//           </div>
//         )
//       }
// }
// export default Result;

// const ChildComponent = (props) => {
//   this.state = {start: props.start,
//                 end: props.end
//                                 }
// }

// const ChildComponent = (props) => {
//   return(
//         <h2> {props.end} </h2>
//   );
// }

class Result extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {message: "Let's compare stuff"}
      }
    
    componentDidMount() {
      // this.setState({d3: ''});
    }
    
      render() {
        
        const data = {
          nodes: [
            {id: "HkqEDLvxE", color: "red"},
            {id: "011jVS4rb"},
            {id: "PXACjDxmR"},
          ],
          links: [
            {"source": "HkqEDLvxE", "target": "011jVS4rb"},
            {"source": "011jVS4rb", "target": "PXACjDxmR"},
          ]
        };


        if(this.props.code ===  200){
          return (
            <div style={{textAlign:"center"}}>
              {this.props.start} {this.props.mid} {this.props.end}
            </div>
            )
        }
        if(this.props.code === 404){
          return (
            <div style={{textAlign:"center"}}>
              No such page exists! Please check the URL if you have entered it manually. 
            </div>
            )
        }
        if(this.props.change === 1){
          return (
            <div style={{textAlign:"center"}}>
             We couldn't find any connection between the terms. Download our GUI for better results
            </div>
            )
        }
        if (this.props.length === null){ 
          return (
            <div style={{textAlign:"center",zIndex:"999999",marginTop:"-100px",height:"40vh"}}>
              {/* Let's compare stuff */}
              <Graph data={data} enableDrag={true} nodeDistance={2000}/>
            </div>
            )
        }
      }
}
export default Result;